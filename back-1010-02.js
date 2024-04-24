const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["3","2 2","1 5","13 29"];
let inputArr = [];
for (let i = 1; i < input.length; i++) {
  inputArr.push(input[i].split(" "));
}

let answer = [];

inputArr.map(el =>{
    const n = + el[0];
    const m = + el[1];
    
    const memo = Array.from(Array(30), () => Array(30).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i === j) {
                memo[i][j] = 1;
            }else if(i===1){
                memo[i][j] = j;
            }else{
                let temp = 0;
                for (let k = 0; k < j; k++) {
                    temp += memo[i-1][k]    
                }
                memo[i][j] = temp;
            }
           
        }
    }
    answer.push(memo[n][m]);

});
console.log(answer.join("\n"));


// 공식 기억 나나??

