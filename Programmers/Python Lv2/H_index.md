## 문제 설명

H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

## 제한사항

* 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
* 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

## 입출력 예

|citations|return|
|:---|:---|
|[3,0,6,1,5]|3|
|[12,11,10,9,8,1]|5|
|[0,0,1,1]|[1]|

<br/>
<br/>

## 나의 코드

```py
def solution(citations):    
        
    if (max(citations) == 0):
        return 0
    
    for maxNum in range(max(citations), 0, -1):
        cnt = 0
        
        for i in citations:
            if maxNum <= i:
                cnt += 1
            if maxNum == cnt:
                return cnt
                

# 큰 수 부터 정렬을 한다.
# 같은 경우의 수 중에서 최대값을 찾아야한다.
# 제일 큰 수부터 0 까지 -1 씩 내려가면서 큰 수 부터 찾는다. 첫번째 for maxNum loop
# 제일 큰 수부터 카운트를 하고 같을 때마다 카운트를 한다. cnt = 0
# 만약 제일 큰수의 개수보다 이상이면 그 수를 리턴 maxNum >= cnt
```
