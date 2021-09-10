// TODO: 1880번

function findX(arr) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
      if (hash[arr[i]] === undefined) {
          hash[arr[i]] = 0;
      }

      hash[arr[i]]++;
  }

  let max = 0;

  for (let X in hash) {
      if (max < Number(X) && Number(X) === hash[X]) {
          max = Number(X);
      }
  }

  return max;
}