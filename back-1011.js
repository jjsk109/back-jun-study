const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["3","0 3","1 5","45 50"];
let inputArr = [];
for (let i = 1; i < input.length; i++) {
    const spl = input[i].split(" ");
    const leng = Math.abs(Number(spl[1]) -  Number(spl[0]));
    inputArr.push(leng);
}

const answer = inputArr.map((n)=>{
    let last = 1;
    let secondLast = 0;
    let x = 1;
    const max = 2 ** 31;
    
    let anw = 0;

    for (let i = 1; i <= max; i++) {
        for (let j = 0; j < 2; j++) {
            x = x+i;
            secondLast = last;
            last = x;
            anw++;
            if (secondLast <= n && last > n ) {
                return anw;
            }
        }
    }
    return anw;
});


console.log(answer.join("\n"));

