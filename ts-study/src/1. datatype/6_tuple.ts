/**
 * 배열(Array) : 동일한 데이터 타입을 가진 값들을 물리적으로 연속해서 저장해 놓은 객체, Heap에 저장
 * 튜플(Tuple) : 다양한 데이터 타입을 가진 값들을 물리적으로 연속해서 저장함, Heap에 저장
 *               인덱스 별로 데이터 타입을 정의
 * 튜플 정의 형식
 * const(let) 변수명: [데이터타입, 데이터타입, ...] = [데이터1, 데이터2, ...];
 */
const num:number = 100;
const numArray:number[] = [1, 2, 3, 4, 5];
// const numTuple:[number, string, boolean, number] = [1, 'hong', true, 300]; // 정석
const numTuple = [1, 'hong', true, 300]; // 이렇게 써도 가능
console.log(numTuple[0]); //1
console.log(numTuple[1]); //hong
console.log(numTuple[2]); //true
console.log(numTuple[3]); //300

//const [] = 함수명; // 구조분해 할당을 이용하여 인덱스 별로 튜플에 저장함
const [a1, b1, c1, d1] = numTuple;

console.log(num);// 100
console.log(numArray);// [ 1, 2, 3, 4, 5 ]
console.log(numTuple);// [ 1, 'hong', true, 300 ]
console.log(a1, b1, c1, d1);// 1 hong true 300
