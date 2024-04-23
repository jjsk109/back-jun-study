const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// 테스트를 위해 입력값을 직접 설정합니다.
const input = ["4","220 29","195 20","200 9","180 30"];

let n = 0; // 책의 수
let books = []; // 책의 정보를 저장할 배열

// 입력값을 처리합니다.
input.forEach((line, idx) => {
    if (idx === 0) {
        n = parseInt(line); // 책의 수를 저장합니다.
    } else {
        const [h, t] = line.split(' ').map(Number); // 책의 높이와 두께를 저장합니다.
        books.push({h, t}); // 책의 정보를 배열에 추가합니다.
    }
});

// 책을 두께 순으로 정렬합니다.
books.sort((a, b) => a.t - b.t);

console.log(books);

let bookshelfSize = [];

// 3 X Math.ceil(n/3) 의 크기로 dp 2차원 배열을 생성합니다. 
let dp = Array.from(Array(3), () => Array(Math.ceil(n/3)).fill(undefined));
console.log(dp);

 /**
 * 
 * ex. 
 * [books[2] undifined]
 * [books[1] undifined]
 * [books[0] books[3]]
 * 
 * [books[2] undifined]
 * [books[1] books[3]]
 * [books[0] undifined]
 * 
 * [books[2] books[3]]
 * [books[1] undifined]
 * [books[0] undifined]
 * 
 * [books[3] undifined]
 * [books[1] undifined]
 * [books[0] books[2]]
 * 
 * [books[3] undifined]
 * [books[1] books[2]]
 * [books[0] undifined]
 * 
 * [books[3] books[2] ]
 * [books[1] undifined]
 * [books[0] undifined]
 */

// dp에  책을 넣을 수 있는 경우의 수를 저장합니다.

for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= 2; j++) {
        for (let k = 0; k <= Math.ceil(n / 3); k++) {

        }
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculatePermutations(arr) {
    const n = arr.length;
    return factorial(n);
}

const inputArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const permutations = calculatePermutations(inputArray);
console.log("주어진 배열의 경우의 수:", permutations);