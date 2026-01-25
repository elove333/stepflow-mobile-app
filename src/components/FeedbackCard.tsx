import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { normalizeScore, toPercent } from '../utils/metrics';

interface FeedbackCardProps {
  feedback: {
    id: string;
    score: number; // Decimal in range [0,1] or percentage [0,100]
    date: string;
    comments?: string;
  };
}

/**
 * FeedbackCard component displays user feedback with score as percentage
 * @param feedback - Feedback object with score in decimal (0..1) or percentage (0..100) format
 */
export const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  // Normalize and convert score to percentage for display
  const scorePercent = toPercent(feedback.score);

  /**
   * Get color based on percentage thresholds
   * @param percent - Score as percentage (0-100)
   */
  const getScoreColor = (percent: number): string => {
    if (percent >= 80) return '#4CAF50'; // Green for high scores
    if (percent >= 60) return '#FF9800'; // Orange for medium scores
    return '#F44336'; // Red for low scores
  };

  const scoreColor = getScoreColor(scorePercent);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.scoreBadge, { backgroundColor: scoreColor }]}>
          <Text style={styles.scoreText}>{scorePercent}%</Text>
        </View>
        <Text style={styles.dateText}>{feedback.date}</Text>
      </View>
      {feedback.comments && (
        <Text style={styles.commentsText}>{feedback.comments}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  scoreBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  scoreText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#666666',
    fontSize: 14,
  },
  commentsText: {
    color: '#333333',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default FeedbackCard;
