import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

interface ChartDataPoint {
  date: string;
  score: number;
}

interface ProgressChartProps {
  data: ChartDataPoint[];
}

/**
 * ProgressChart Component
 * Displays progress visualization (placeholder for chart library)
 */
const ProgressChart: React.FC<ProgressChartProps> = ({data}) => {
  const screenWidth = Dimensions.get('window').width - 72;

  return (
    <View style={styles.container}>
      {data && data.length > 0 ? (
        <View style={styles.chartPlaceholder}>
          <Text style={styles.chartText}>📊 Progress Chart</Text>
          <Text style={styles.chartSubtext}>
            {data.length} sessions recorded
          </Text>
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No data to display yet</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  chartText: {
    fontSize: 24,
    color: '#666',
    marginBottom: 8,
  },
  chartSubtext: {
    fontSize: 14,
    color: '#999',
  },
  emptyState: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#999',
  },
});

export default ProgressChart;
