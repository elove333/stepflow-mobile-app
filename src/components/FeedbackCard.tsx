import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Feedback {
  id: string;
  date: string;
  score: number;
  feedback: string;
}

interface FeedbackCardProps {
  feedback: Feedback;
}

/**
 * FeedbackCard Component
 * Displays AI feedback from a training session
 */
const FeedbackCard: React.FC<FeedbackCardProps> = ({feedback}) => {
  const getScoreColor = (score: number): string => {
    if (score >= 80) return '#00C853';
    if (score >= 60) return '#FFB300';
    return '#D32F2F';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{new Date(feedback.date).toLocaleDateString()}</Text>
        <View
          style={[
            styles.scoreBadge,
            {backgroundColor: getScoreColor(feedback.score)},
          ]}>
          <Text style={styles.scoreText}>{feedback.score}</Text>
        </View>
      </View>
      <Text style={styles.feedbackText}>{feedback.feedback}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  scoreBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  scoreText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  feedbackText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default FeedbackCard;
