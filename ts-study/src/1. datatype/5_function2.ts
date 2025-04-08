/**
 * 타입스크립트 함수 선언 확장
 */

//함수 선언 후 차후 구현하는 방법 : 함수 표현식(화살표 함수)
// greet5("홍길동") => 화면 출력: 이름 - 홍길동
let greet5 : (pname: string) => string; 
greet5 = (pname:string): string => {
    return `이름- ${pname}`;
}
console.log(greet5("홍길동"));

// 함수의 오버로딩(OverLoading): 가상 함수로 정의(abstract function)
// 오버로딩(OverLoading) : 동일한 이름의 함수가 여러 개 존재하는 것
// 단, 함수의 파라미터(매개변수)의 갯수와 타입은 달라야 함!!
// add(100, 200); add("홍", "길동");
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


