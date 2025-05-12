export const getMean = (data) => data.reduce((a, b) => a + b, 0) / data.length;

export const getStdDev = (data, mean) => {
  const variance = data.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / (data.length - 1);
  return Math.sqrt(variance);
};

export const getCovariance = (a, b, meanA, meanB) => {
  const n = a.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += (a[i] - meanA) * (b[i] - meanB);
  }
  return sum / (n - 1);
};

export const getCorrelation = (a, b) => {
  const meanA = getMean(a);
  const meanB = getMean(b);
  const stdA = getStdDev(a, meanA);
  const stdB = getStdDev(b, meanB);
  const cov = getCovariance(a, b, meanA, meanB);
  return cov / (stdA * stdB);
};
