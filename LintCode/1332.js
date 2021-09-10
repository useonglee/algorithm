function hammingWeight(n) {
  // write your code here
  return n.toString(2).split('').filter(v => v === '1').length;
}