/**
 * enum(enumeration) - 열거형으로 표현되는 데이터를 저장하는 형식
 * 정의 형식
 * const(let) eunum 변수명{
 * enum item1   //인덱스0
 * enum item1   //인덱스1
 * }
 */

const  objLiteral = {
    name: "홍길동",
    age: 30
}

enum objEnum {
    TypeScript = "타입스크립트", //0
    JavaScript = "자바스크립트", //1
    React = "리액트 " //2
}
console.log(objLiteral); //{ name: '홍길동', age: 30 }
console.log(objEnum.TypeScript); //타입스크립트

// 출력 형식의 차이점!!!
//  objLiteral --> for.. in 사용 ❌, Object.keys() : [name, age] ==> for..in을 적용해서 출력
const keys = Object.keys(objLiteral);
console.log(keys); //[ 'name', 'age' ]
console.log(`forEach ====================================================`);
keys.forEach((key) => {
    console.log(`objLiteral[key] ${objLiteral[key as keyof typeof objLiteral]}`);
    /**
     *  objLiteral[key] 홍길동
        objLiteral[key] 30
     */
})
console.log(`for..in ====================================================`);

for(const key in keys){
    console.log(`objLiteral[key] ${objLiteral[key as keyof typeof objLiteral]}`);
    console.log('key', keys[key]);
     /**
      * objLiteral[key] undefined
        key name
        objLiteral[key] undefined
        key age
      */
}
console.log(`objEnum: for..in-------------------------------------------------`);

//  objEnum ==> for.. in 사용 ⭕
for(const key in objEnum){
    console.log(` ${objEnum[key as keyof typeof objEnum]}`);
    /**
     *  타입스크립트
        자바스크립트
        리액트
     */
}