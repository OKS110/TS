/**
 * 타입스크립트 배열 형식
 * const(let) 배열변수명: 타입정의[] = [데이터, ...];
 * const(let) 배열변수명: Array<타입정의> = new Array();
 */

// 1, 2, 3, 4, 5 숫자를 저장하는 배열 생성
const array1: number[] = [1, 2, 3, 4, 5]; // [ 1, 2, 3, 4, 5 ]
console.log(array1, typeof (array1));[1, 2, 3, 4, 5]; // [ 1, 2, 3, 4, 5 ] object

const array2: Array<number> = new Array(1, 2, 3, 4, 5);
console.log(array2); // [ 1, 2, 3, 4, 5 ]

console.log(array1[0]);// 1
console.log(array2[0]);// 1

//배열 메소드 forEach, for...in, for...of, map...
array1.forEach((item) => console.log(item)); // 1 2 3 4 5
array1.forEach((item) => console.log(item)); // 1 2 3 4 5

for (const i of array1) {
    console.log("for of", i);
    /**
     *  for of 1
        for of 2
        for of 3
        for of 4
        for of 5
     */
}

array2.map((item) => console.log(item)); // 1 2 3 4 5