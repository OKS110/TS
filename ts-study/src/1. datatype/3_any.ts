/**
 * any 타입은 타입을 제한하지 않고, 동적으로 값을 입력받을 수 있음
 */
let obj: any = { x: 100 };
console.log(obj.x, typeof(obj)); //100 object

obj = "100";
console.log(obj, typeof(obj)); //100 string
