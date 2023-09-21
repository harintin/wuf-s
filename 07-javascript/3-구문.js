// 객체의 구조 분해
const obj = {
  e: 1,
  f: 2,
  g: 3,
};

const { e, f, g } = obj;
console.log(e, f, g); // 1 2 3

// 기본값 할당, 변수 할당

// 구조 분해 할당

const { h = 4, i: free, k: kk = 10 } = obj;
console.log(h, free, kk); // 1 undefined 10
// undefined - 객체의 키와 변수명이 다를 경우

// 선택적 체이닝 Optional Chaining
// user.name의 정보가 null, undefined 일 경우 점(.) 표기법으로 속성을 조회할 수 없기 때문에 type 에러가 발생한다.

let user = null; //주소 정보가 없는 사용자
// alert(user?.name);

//예시
let user2 = {
  name: "winter",
  age: 2,
  address: {
    city: "seoul",
    zipcode: "12345",
  },
};

let user3 = {
  name: "fall",
  age: 3,
};

function printCity(user) {
  return user.address.city;
}

console.log(printCity(user2));
