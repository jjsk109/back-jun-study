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

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function generatePermutations(arr, start, end, result) {
    if (start === end) {
        result.push(arr.slice()); // 현재 배열을 결과 배열에 추가
    } else {
        for (let i = start; i <= end; i++) {
            swap(arr, start, i); // 배열 요소를 교환
            generatePermutations(arr, start + 1, end, result); // 재귀적으로 순열 생성
            swap(arr, start, i); // 원래 상태로 되돌림
        }
    }
}

function generateAllPermutations(arr) {
    const result = [];
    generatePermutations(arr, 0, arr.length - 1, result);
    return result;
}

const inputArray = [[10, 9, 8], [7, 6, 5], [4, 3, 2], [1,undefined,undefined]];
const permutations = generateAllPermutations(inputArray);

// console.log("주어진 배열의 모든 경우의 수:");
// permutations.forEach((permutation, index) => {
//     console.log(`${index + 1}: [${permutation}]`);
// });
console.log("총", permutations.length, "가지 경우의 수가 있습니다.");

const BigNum = require('bignum');

const factorial71 = BigNum(1);
for (let i = 2; i <= 71; i++) {
    factorial71.mul(i);
}

console.log("71! =", factorial71.toString());