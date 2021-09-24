// TODO: TestDome - Song
// https://www.testdome.com/questions/48845

// 정확도: 25%
class Song {
  name;
  nextSong;
  
  constructor(name) {
    this.name = name;
  }
  
  isRepeatingPlaylist() {
    // 재생 목록안에 이전 노래들을 포함하고 있다면 반복 재생이다.
    // 그렇지 않으면, 재생 목록의 마지막 노래는 undefined이다.
    // 사용된 시간과 관련하여 효율적이면 true를 반환한다.
    // 현재 name과 이전 노래의 nextSong이 같다면 true를 반환한다.

    // console.log(this.name);
    // console.log(this.nextSong);

    let next = this.nextSong;
    
    while(next !== null) {
      if (next.name === this.name) {
        return true;
      }

      next = next.nextSong;
    }

    return false;
  }
}

let first = new Song("Hello");
let second = new Song("Eye of the tiger");

first.nextSong = second;
second.nextSong = first;

console.log(first.isRepeatingPlaylist());