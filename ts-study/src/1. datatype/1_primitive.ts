/**
 * 타입스크립트의 Primitive 데이터 타입 실습
 * 변수 정의 : const(let) 변수명 : 타입 정의 = 값(데이터);
 */


// 정수형 데이터
let number1: number = 100;
console.log(number1); //100
// number1 = "100"; //Error!
number1 = 200;
console.log(number1); //200

// 실수형 데이터
let dnumber1: number = 1.234;
// dnumber1 = 300; // 같은 number 타입에서는 동적으로 정수, 실수 할당 가능
console.log(dnumber1); // 1.234

// 불린
let flag: boolean = false;
console.log(flag); // false
flag = !flag;
console.log(flag); // true

// 배열 : 문자열타입 - 홍길동, 홍길순, 홍길영
const names: string[] = ["홍길동", "홍길순", "홍길영"]; // 배열을 string으로만 받고 싶음
// const names2:string = ["홍길동"]; // string은 객체가 아님. -> string[]
console.log(names); // [ '홍길동', '홍길순', '홍길영' ]

// 초기값: undefined(원시데이터 초기값), null(참조, 객체 데이터 초기값) - 타입 지정 굳이 할 필요 없음
const initName: undefined = undefined;
const initArray: null = null;
console.log(initName); // undefined
console.log(initArray); // null

// typeof
const x: number = 100;
const xx: number = 100;
// const xx: string = 100; 값의 비교가 안 됨
console.log("값의 비교", x === xx); // 값의 비교 true
console.log("값의 타입", x, typeof(x)); // 값의 타입 100 number
console.log("값의 타입", xx, typeof(xx)); // 값의 타입 100 number
console.log("타입 비교", typeof(x) === typeof(xx)); // 타입 비교 true
