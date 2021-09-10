function countPrimes(n) {
  if (n <= 2) return 0;
  
  const isPrime = (num) => {
      for (let i = 3; i <= parseInt(Math.sqrt(num)); i += 2) {
          if (num % i === 0) return false;
      }

      return true;
  }

  let answer = 0;

  for (let i = 3; i < n; i += 2) {
      if (isPrime(i)) answer++;
  }
  
  return answer + 1;
}