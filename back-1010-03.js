// 백준 1010 문제
const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["3","2 2","1 5","13 29"];
let inputArr = [];
for (let i = 1; i < input.length; i++) {
    const element = input[i];
    inputArr.push(element.split(" "));
}


for (let i = 0; i < inputArr.length; i++) {
    
}
inputArr.forEach(el =>{
    const n = + el[0];
    const m = + el[1];
    // const memo = Array.from(Array(30), () => Array(30).fill(0));
    let memo   = Array.from(Array(30), () =>Array(30).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if(i === j){
                // d[1][1] = 1 , d[2][2] = 1 , d[3][3] = 1
                memo[i][j] = 1;
            }else if(i === 1){
                // d[1][2] = 2 d[1][3] = 3 d[1][4] = 4 d[1][5] = 5
                memo[i][j] = j;
            }else{
                let temp = 0;
                // d[3][5] = d[2][4] + d[2][3] + d[2][2] 이다 
                // d[2][4] = d[1][3] + d[1][2] + d[1][1] 이다 
                // d[3][5] = (d[1][3] + d[1][2] + d[1][1]) + ﻿ d[2][3] + d[2][2]
                for (let k = 0; k < j; k++) {
                    temp += memo[i-1][k];
                }
                memo[i][j] = temp;
            }
            
        }
    }
    console.log(memo[n][m]);

});