// Standard reducing-balance EMI formula: EMI = P x r x (1+r)^n / ((1+r)^n - 1)
export function calculateEMI(principal, annualRatePercent, tenureMonths) {
  const r = annualRatePercent / 12 / 100;
  if (!principal || !tenureMonths) return { emi: 0, totalInterest: 0, totalPayment: 0 };
  if (r === 0) {
    const emi = principal / tenureMonths;
    return { emi, totalInterest: 0, totalPayment: principal };
  }
  const factor = Math.pow(1 + r, tenureMonths);
  const emi = (principal * r * factor) / (factor - 1);
  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;
  return { emi, totalInterest, totalPayment };
}

// Simple compounding maturity estimate for a fixed deposit
export function calculateFDMaturity(principal, annualRatePercent, tenureYears, compoundingPerYear = 4) {
  const r = annualRatePercent / 100;
  const n = compoundingPerYear;
  const maturity = principal * Math.pow(1 + r / n, n * tenureYears);
  return { maturity, interestEarned: maturity - principal };
}
