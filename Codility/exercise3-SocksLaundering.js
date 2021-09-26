// TODO: Codility - exercise 3: SocksLaundering

// 정확도: 100%
function solution(K, C, D) {
  // 밥은 짝이 있는 깨끗한 양말이 필요하다. (색깔이 같은 양말이 한 쌍)
  // 양말은 클린한 것과 더티한 것이 있다.
  // 양말을 세탁하고 가장 많은 양말을 가지고 싶어한다.
  // N개의 깨끗한 양말과 M개의 더러운 양말을 가지고 있다.
  // 정수로 이루어진 배열이 주어지고, 각 숫자는 컬러를 뜻한다.
  // 밥의 세탁기는 K만큼 빨래할 수 있다.
  // 세탁 후 밥이 가질 수 있는 깨끗한 양말의 수를 반환한다.

  let answer = 0;
  let cleanSocks = {};

  for (let i = 0; i < C.length; i++) {
      if (cleanSocks[C[i]] === undefined) {
          cleanSocks[C[i]] = 0;
      }
      cleanSocks[C[i]]++;
  }

  let noPairs = [];
  
  // 짝이 있으면 제거하고 개수를 센다.
  // 짝이 없는 것끼리 모아준다.
  for (let sock in cleanSocks) {
      if (cleanSocks[sock] > 1) {
          answer += parseInt(cleanSocks[sock] / 2);
          cleanSocks[sock] -= parseInt(cleanSocks[sock] / 2) * 2;
      }

      if (cleanSocks[sock] === 1) noPairs.push(sock);
  }

  if (K === 0) return answer;

  let dirtySocks = {};

  for (let i = 0; i < D.length; i++) {
      if (dirtySocks[D[i]] === undefined) {
          dirtySocks[D[i]] = 0;
      }
      dirtySocks[D[i]]++;
  }

  for (let i = 0; i < noPairs.length; i++) {
      if (dirtySocks[noPairs[i]] > 0) {
          dirtySocks[noPairs[i]]--;
          answer++;
          K--;
      }

      if (K === 0) return answer;
  }

  K = parseInt(K / 2) * 2;

  for (let sock in dirtySocks) {
      while(dirtySocks[sock] > 1 && K > 1) {
          dirtySocks[sock] -= 2;
          K -= 2;
          answer++;
      }
  }

  return answer;
}

// 정확도: 80%
function solution(K, C, D) {
  let answer = 0;
  let cleanSocks = {};

  for (let i = 0; i < C.length; i++) {
      if (cleanSocks[C[i]] === undefined) {
          cleanSocks[C[i]] = 0;
      }
      cleanSocks[C[i]]++;
  }

  if (K === 0) {
      for (sock in cleanSocks) {
          if (cleanSocks[sock] % 2 === 0) answer += cleanSocks[sock] / 2;
      }
  }

  let possibleLaundry = [];
  let checkPairSock = {};

  for (let i = 0; i < D.length; i++) {
      if (D[i] in cleanSocks) {
          possibleLaundry.push(D[i]);
          continue;
      }

      if (checkPairSock[D[i]] === undefined) {
          checkPairSock[D[i]] = 1;
      } else {
          possibleLaundry.push(D[i]);
          possibleLaundry.push(D[i]);

          delete checkPairSock[D[i]];  
      }
  }

  for (let sock in cleanSocks) {
      if (K === 0) break;

      const laundry = possibleLaundry.indexOf(Number(sock));
      
      if (laundry !== -1 && cleanSocks[sock] % 2 !== 0) {
          cleanSocks[sock]++;
          K--;
          possibleLaundry[laundry] = -2;
      }

      if (cleanSocks[sock] % 2 === 0) answer += cleanSocks[sock] / 2;
  }

  if (K !== 0 && possibleLaundry.length > 1) {
      let set = new Set();

      for (let i = 0; i < possibleLaundry.length; i++) {
          if (!set.has(possibleLaundry[i])) {
              set.add(possibleLaundry[i]);
          } else if (K >= 2) {
              set.delete(possibleLaundry[i]);
              K = K - 2;
              answer++;
          }
      }
  }
  
  return answer;
}

// test case
// console.log(solution(1, [1], [4])) // 0
// console.log(solution(2, [1], [3, 2, 5, 5])) // 1
// console.log(solution(5, [1, 1, 2], [2, 2, 3])) // 2
// console.log(solution(3, [1, 2], [8, 8, 8, 8, 9])) // 1
// K === 0
// 더러운 양말을 사용하여 깨끗한 양말과 짝을 이루지 못한 경우 저장되지 않는 솔루션을 유발하는 테스트