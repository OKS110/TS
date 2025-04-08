/**
 *  타입스크립트 함수 선언
 * 
 *  기본 함수 선언: 
 *  function 함수명(파라미터: 타입): 반환 값 타입{
 *      실행로직
 *      return 반환 값 ;
 *      }
 */

// greet1("홍길동") --> 반갑습니다. 홍길동님!!!


function greet1(name : string){
    console.log(`반갑습니다. ${name}님!!!`); 
}
greet1("홍길동"); //반갑습니다. 홍길동님!!!

//greet2("홍길동", 30) --> 홍길동의 나이는 30입니다. 
function greet2(name:string, age:number):string{
    const result = `${name}의 나이는 ${age}입니다.`;
    return result;
}
console.log(greet2("홍길동", 30)); //홍길동의 나이는 30입니다.

// greet3("Alice", "서울시 강남구") : 화살표 함수를 통해 함수 표현식으로 생성
// age 나이를 입력받는 변수 즉, 매개변수 추가, 단! 타입은 정해지지 않음.
// age는 필수 입력 사항이 아닌 선택 사항
const greet3 = (name:string, address:string, age?:any) => { // ?는 있어도 되고 없어도 되는 선택 옵션
    (age) ? console.log(`이름: ${name}, 주소: ${address}, 나이:${age}`)
    : console.log(`이름: ${name}, 주소: ${address}`); // 이 부분에서 age는 undefined이다. 
}
greet3("Alice", "서울시 강남구", 29); //이름: Alice, 주소: 서울시 강남구, 나이:29
greet3("Alice", "서울시 강남구", "29"); //이름: Alice, 주소: 서울시 강남구, 나이:29
greet3("Alice", "서울시 강남구"); //이름: Alice, 주소: 서울시 강남구

// greet4(1, 2, 3, 4, 5) 값을 입력 받아 배열객체로 화면 출력
// const greet4 = (num1:number, num2:number, num3:number, num4:number, num5:number) => {
//     const newArray:number[] = [num1, num2, num3, num4, num5];
//     return newArray;
// }
// console.log(greet4(1, 2, 3, 4, 5)); //[ 1, 2, 3, 4, 5 ]

const greet4 = (...params:any[]) => { // 스프레드 연산자 사용
    console.log(params);
}
greet4(1, 2, 3, 4, 5); //[ 1, 2, 3, 4, 5 ]
greet4("❤","🧡","💛","💚","💙","💜","🤎","🖤");
/**
 * [
  '❤',  '🧡', '💛',
  '💚', '💙', '💜',
  '🤎' , '🖤'
] // 하트 색상이 살짝 다른 오류가 나온다.
 */



