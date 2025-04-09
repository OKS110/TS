/**
 * 타입스크립트 함수 선언 확장
 * 객체 지향 프로그래밍(OOP: Object Oriented Programming)의 특성을 포함하여 함수 선언과 사용이 확장됨
 */

//함수 선언 후 차후 구현하는 방법 : 함수 표현식(화살표 함수)
// greet5("홍길동") => 화면 출력: 이름 - 홍길동
let greet5 : (pname: string) => string; // 함수의 타입을 체크
greet5 = (pname:string): string => {
    return `이름- ${pname}`;
}
console.log(greet5("홍길동"));

// ❗❗ 함수의 오버로딩(OverLoading): 가상 함수로 정의(abstract function)
// 오버로딩(OverLoading) : 동일한 이름의 함수가 여러 개 존재하는 것
// 단, 함수의 파라미터(매개변수)의 갯수와 타입은 달라야 함!!
//  add(100, 200);   add("홍", "길동");
function add(p1:number, p2:number): number; //{} 즉, body(구현부) 없이 header만 선언
function add(p1:string, p2:string): string; //

/**반드시 가상 함수를 구현 함수 형식으로 정의해야 함!!! */
function add(p1: any, p2: any): any{
    return p1 + p2;
};
console.log(add(100, 200)); //300
console.log(add('홍', '길동')); //홍길동

// ❗❗ 함수에서의 제너릭(Generic) : 객체 타입의 제한을 두는 경우 사용
// 함수 선언 시 제너릭을 사용하여, 매개변수와 리턴타입을 통일할 수 있음
// 제너릭을 통해 함수를 선언하는 경우 매개변수 이름은 '중립적'으로 정의하는 것을 권장
// 원시값: number, string, boolean 타입은 Wrapper Class 형식으로 정의되어 있음!!
const a = {
    x: "100",
    y: 100,
    z:[99, 98, 97],
    aa:true
};
function greet6<T>(value: T): T{ // 중립적인 매개변수 이름 : value
    return value;
}
console.log(greet6<string>(a.x)); // 100 - 원시타입인 string 타입의 Wrapper Class인 String 클래스로 자동 변환
console.log(greet6<number>(a.y)); // 100
console.log(greet6<boolean>(a.aa)); // true
console.log(greet6<Array<number>>(a.z)); // [ 99, 98, 97 ]
console.log(greet6<Array<number>>(new Array(1, 2, 3, 4, 5))); // [ 1, 2, 3, 4, 5 ] - 11.2.0 이상에서 실행되므로 버전이슈 발생함


// ❗❗ 함수의 리턴 타입 : void, never
// void - return값이 없는 경우
// never - 에러 또는 익셉션 값을 리턴하는 경우
function returnVoid(name: string): void {
    console.log(`안녕하세요 ${name}님`);
}
returnVoid('홍길동'); //안녕하세요 홍길동님

// function returnNever(): never{
//     throw new Error('never 키워드 테스트 에러!')
// }
// returnNever();
/**
 * Error: never 키워드 테스트 에러!
    at returnNever (C:\dev\TS\ts-study\src\1. datatype\5_function2.ts:57:11)
    at Object.<anonymous> (C:\dev\TS\ts-study\src\1. datatype\5_function2.ts:59:1)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Module.m._compile (C:\Users\tj\AppData\Local\npm-cache\_npx\1bf7c3c15bf47d04\node_modules\ts-node\src\index.ts:1618:23)
    at node:internal/modules/cjs/loader:1689:10
    at Object.require.extensions.<computed> [as .ts] (C:\Users\tj\AppData\Local\npm-cache\_npx\1bf7c3c15bf47d04\node_modules\ts-node\src\index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1318:32)
    at Function._load (node:internal/modules/cjs/loader:1128:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
 */

// ❗❗ 콜백 함수 - 함수의 매개변수로 입력되는 함수이며, 함수명이 별도로 존재하지 않으며 독립적으로 실행하지 못한다.
// 매개변수(파라미터)로 name:문자열, 콜백함수를 인자로 받는다.
// 함수 타입: const(let) 함수명 () => 리턴타입;
// 콜백 함수 타입: () => 리턴타입;
function processCall(name: string, callback: (message:string) => void){ //타입 지정
    console.log(`name :: ${name}`);
    const message = `반갑습니다~ ${name}님!!`;
    callback(message); //콜백함수 호출
}
processCall("홍길동", (message) => { // 실제 실행
    console.log(message);
 }); 
// name :: 홍길동
// 반갑습니다~ 홍길동님!!

function processCall2(name: string, callback: (message:string) => number){ //타입 지정
    console.log(`name :: ${name}`);
    const message = `반갑습니다~ ${name}님!!`;
    const result: number = callback(message);
    console.log(`result : ${result}`);
    
}
processCall2("홍길동", (message) => { // 실제 실행
    console.log(message);
    return 100;
 }); 
/**
 *  name :: 홍길동
    반갑습니다~ 홍길동님!!
    result : 100
 */
