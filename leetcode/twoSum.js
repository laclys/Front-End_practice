// O(n) time
const twoSum = (arr, target) => {
  let map = {},
      results = [];
  for (let i=0; i<arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      results.push([map[arr[i]], arr[i]])
    } else {
      map[target - arr[i]] = arr[i];
    }
  }
  return results
}