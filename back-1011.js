const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["3","10 30","0 2147483648","45 50"];
let inputArr = [];
for (let i = 1; i < input.length; i++) {
    const spl = input[i].split(" ");
    const leng = Math.abs(Number(spl[1]) -  Number(spl[0]));
    inputArr.push(leng);
}


for (let k = 0; k < inputArr.length; k++) {
    const n = inputArr[k];
    let last = 1;
    let secondLast = 0;
    let x = 1;
    const max = 2 ** 31;
    let anw = 0;
    let isCheck = false;
    for (let i = 1; i <= max; i++) {
        for (let j = 0; j < 2; j++) {
            x = x+i;
            secondLast = last;
            last = x;
            anw++;
            if (secondLast <= n && last > n ) {
                console.log(anw);
                isCheck = true;
                break;
            }
        }
        if(isCheck){
            break;
        }
    }
    
  
}
console.log();
for (let k = 0; k < inputArr.length; k++) { 
    const length = inputArr[k]; 
    let pos = 1; 
    let turn = 1; 
    let pos_pow = 0; 
    while(pos < length) { 
        pos_pow++; 
        turn++; 
        pos += pos_pow; 
        if(pos >= length) break; 
        turn++; 
        pos += pos_pow; 
        if(pos >= length) break; 
    } 
    if(pos > length) turn--; 
    console.log(turn); 
} 

