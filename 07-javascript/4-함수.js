// 함수 선언하기

// 함수 선언문
function hello() {
  console.log("hello");
}

// 함수 표현식
const world = function () {
  console.log("world");
};

// 함수 실행하기
hello();
world();

// 호이스팅 : 함수 선언문이 코드의 최상단으로 끌어올려지는 것을 말한다. 함수 실행문이 선언문 밑에 있어도 실행 가능하다.

// 함수 표현식 앞에 실행문을 쓰면 에러가 발생한다. 반드시 함수 표현식에는 실행문을 하단에 배치한다.

// 반환(return) 및 종료(exit)
// return 키워드를 사용하면 함수가 종료된다.
// return 뒤에 오는 코드는 실행되지 않는다.

function hello1() {
  return "hello";
}

function hello2() {
  return;
}

function hello3() {
  return 1;
  // return 2; 실행되지 않는다.
}

function hello4() {
  console.log("4"); // 글자
  return 5; // 숫자
}

console.log(hello1());
console.log(hello2());
console.log(hello3());
console.log(hello4());
