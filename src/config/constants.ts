// Configuration constants for the StepFlow mobile app

// Metric format: normalized decimal in [0,1]. Convert to percent for UI using src/utils/metrics.ts
export const METRICS = {
  MIN_VALUE: 0,
  MAX_VALUE: 1,
};

// UI constants
export const UI = {
  SCORE_THRESHOLD_HIGH: 80, // >= 80% is considered high
  SCORE_THRESHOLD_MEDIUM: 60, // >= 60% is considered medium
};

export default {
  METRICS,
  UI,
};
