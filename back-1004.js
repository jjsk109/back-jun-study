const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = ["3","-5 1 5 1","3","0 0 2","-6 1 2","6 2 2","2 3 13 2","8","-3 -1 1","2 2 3","2 3 1","0 1 7","-4 5 1","12 1 1","12 1 2","12 1 3","102 16 19 -108","12","-107 175 135","-38 -115 42","140 23 70","148 -2 39","-198 -49 89","172 -151 39","-179 -52 43","148 42 150","176 0 10","153 68 120","-56 109 16","-187 -174 8"];

let run = -1;
let runCount = 0;
let x1 = 0;
let y1 = 0;
let x2 = 0; 
let y2 = 0;
let contectCount = 0;
for (let i = 1; i < input.length; i++) {  
  let splitArray = input[i].split(' ').map(Number);

  if(splitArray.length === 4){ // 4개의 경우 좌표
    [x1, y1, x2, y2] = splitArray;
    contectCount = 0;
    runCount = 0;
  }
  else if(splitArray.length === 3){ // 3개의 경우 원
    let [cx, cy, r] = splitArray;
    runCount++;
    // 두점이 모두 원 안에 있을 경우
    if(Math.pow(x1 - cx, 2) + Math.pow(y1 - cy, 2) < Math.pow(r, 2) && Math.pow(x2 - cx, 2) + Math.pow(y2 - cy, 2) < Math.pow(r, 2)){ // 원과 점의 거리가 원의 반지름보다 작으면
      contectCount = 0;
      continue;
    }
    if(Math.pow(x1 - cx, 2) + Math.pow(y1 - cy, 2) < Math.pow(r, 2)){ // 원과 점의 거리가 원의 반지름보다 작으면
      contectCount++;
    }

    if(Math.pow(x2 - cx, 2) + Math.pow(y2 - cy, 2) < Math.pow(r, 2)){ // 원과 점의 거리가 원의 반지름보다 작으면
      contectCount++;
    }

  }else if(splitArray.length === 1){ // 
    run = splitArray[0];
  }


  if(run === runCount){
    console.log(contectCount);
    contectCount = 0;
  }
 
}
 
  




