// TODO: Codility - exercise 7: ArrListLen

function solution(A) {
    // A는 연결 리스트이다.
    // 첫번째 노드는 인덱스 0에 위치한다.
    // 인덱스 K에 위치한 노드의 값은 A[K]이다.
    // 노드의 값이 -1이라면, 배열의 마지막 노드이다.
    // 그렇지 않으면, 인덱스 K에 있는 노드의 후속은 인덱스 A[K]에 위치한다.
    // 조건에 맞게 구성된 배열을 만들고, 배열의 길이를 반환한다.

    const answer = [];

    // 배열 요소 중에 -1이 있는 경우
    if (A.indexOf(-1) !== -1) {
        let cur = A[0];

        while(cur !== -1) {
            answer.push(cur);
            cur = A[cur];
        }
        answer.push(-1);

        return answer.length;
    }

    return A.length;
}