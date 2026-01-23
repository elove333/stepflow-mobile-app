import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {getProgressData, getFeedbackHistory} from '@/api/ProgressService';
import ProgressChart from '@/components/ProgressChart';
import FeedbackCard from '@/components/FeedbackCard';

interface ProgressData {
  totalSessions: number;
  averageScore: number;
  improvementRate: number;
  recentFeedback: Array<{
    id: string;
    date: string;
    score: number;
    feedback: string;
  }>;
}

/**
 * Progress Screen - View training history and AI feedback
 * Displays statistics, charts, and feedback from previous sessions
 */
const ProgressScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progressData, setProgressData] = useState<ProgressData | null>(null);

  useEffect(() => {
    loadProgressData();
  }, []);

  const loadProgressData = async () => {
    try {
      setLoading(true);
      const data = await getProgressData();
      const feedback = await getFeedbackHistory();
      
      setProgressData({
        totalSessions: data.totalSessions || 0,
        averageScore: data.averageScore || 0,
        improvementRate: data.improvementRate || 0,
        recentFeedback: feedback || [],
      });
    } catch (error) {
      console.error('Error loading progress data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200EE" />
        <Text style={styles.loadingText}>Loading your progress...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{progressData?.totalSessions || 0}</Text>
          <Text style={styles.statLabel}>Total Sessions</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>
            {progressData?.averageScore.toFixed(1) || '0.0'}
          </Text>
          <Text style={styles.statLabel}>Average Score</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>
            {progressData?.improvementRate.toFixed(0) || '0'}%
          </Text>
          <Text style={styles.statLabel}>Improvement</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Progress Over Time</Text>
        <ProgressChart data={progressData?.recentFeedback || []} />
      </View>

      <View style={styles.feedbackContainer}>
        <Text style={styles.sectionTitle}>Recent AI Feedback</Text>
        {progressData?.recentFeedback.map(feedback => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
        {(!progressData?.recentFeedback ||
          progressData.recentFeedback.length === 0) && (
          <Text style={styles.emptyText}>
            No feedback yet. Complete a training session to get started!
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    elevation: 2,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200EE',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  chartContainer: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  feedbackContainer: {
    margin: 20,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});

export default ProgressScreen;
