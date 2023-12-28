/**
 *
 * @param minSalesRepsAllowed
 * @param maxSalesRepsAllowed
 * @param countryCount
 * @returns
 */
export function minMaxSalesRCalculator(
  minSalesRepsAllowed: number,
  maxSalesRepsAllowed: number,
  countryCount: number
): { minSalesReq: number; maxSalesReq: number } {
  console.log("Country Count: ", countryCount);
  // after dividing the country count by the maximum number of sales reps allowed
  // we get max step size we can take the smallest step count and since
  // rest is less than the max step size we need to add one more sales rep
  let minSalesReq = Math.floor(countryCount / maxSalesRepsAllowed) + 1;
  if( countryCount % maxSalesRepsAllowed === 0) {
    console.log("Country Count is divisible by max sales reps allowed");
    minSalesReq -= 1;
  }
  // after dividing the country count by the minimum number of sales reps allowed
  // we get min step size we can take the max step count and since
  // we cannot make smaller steps we take a step back and add one more sales rep that is higher than the min step size
  // or we just stay at the same step count and not add or remove any sales reps
  let maxSalesReq = Math.floor(countryCount / minSalesRepsAllowed);
  return {
    minSalesReq,
    maxSalesReq,
  };
}
