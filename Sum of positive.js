// Description:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  var positiveOnes = 0;
  // setup loop to go through array of given length
  for (let i = 0; i < arr.length; i++) {
    // if arr[i] is greater than zero
    if (arr[i] > 0) {
      // add arr[i] to total
      positiveOnes += arr[i];
      console.log(positiveOnes);
    }
  }
  return positiveOnes;
}
arr = [1, 2, 3, -7];

positiveSum(arr);
