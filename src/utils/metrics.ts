export const normalizeScore = (score: number): number => {
  if (score == null || Number.isNaN(score)) return 0;
  // If score looks like a percent (> 1), convert to 0..1
  if (score > 1) return Math.max(0, Math.min(1, score / 100));
  return Math.max(0, Math.min(1, score));
};

export const toPercent = (value: number | null | undefined): number =>
  Math.round(normalizeScore(value ?? 0) * 100);

export const toPercentString = (value: number | null | undefined): string =>
  `${toPercent(value)}%`;

export default { normalizeScore, toPercent, toPercentString };
