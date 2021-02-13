## 문제 설명

두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

## 제한사항

* arr은 길이 1이상, 15이하인 배열입니다.
* arr의 원소는 100 이하인 자연수입니다.

## 입출력 예

|arr|result|
|:------|:---|:---|
|[2,6,8,14]|168|
|[1,2,3]|6|


<br/>
<br/>

## 나의 코드

```js
function solution(arr) {
    // let answer = arr[0];
    
    const answer = arr.reduce((acc, cur) => lcm(cur, acc));
    
    // let i = 1;
    // while(i < arr.length) {
    //     answer = lcm(arr[i], answer);
    //     i++;
    //     }
    
    return answer;
    
function lcm (maxNum, minNum) {
    return maxNum * minNum / gcd(maxNum, minNum);
}
    
function gcd (maxNum, minNum) {
    return maxNum % minNum === 0 ? minNum : gcd(minNum, maxNum % minNum);
}
}
```

최대공약수 함수 `gcd(minNum, maxNum % minNum);` 이 부분에서 작은 숫자를 다시 재귀함수 인자로 넣었어야 했는데...... `gcd(maxNum, maxNum % minNum);` 이런 식으로 큰 숫자를 계속 돌려줘서 삽질을 엄청 했다.. ㅜㅜㅜ 결국 수십번의 디버깅끝에 문제를 알아차리고 풀 수 있었다... 
후 ㅜㅜㅜ 엉뚱한 곳에서 시간을 잡아먹었다...
