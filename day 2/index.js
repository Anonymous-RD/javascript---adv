// function fun1(a) {
//   let c = 2 + 3;
//   return c;
// }
// // let res = fun1();
// console.log(fun1(12));

//Arrow function

let fun2 = () => {
  let c = 20 + 3;
  console.log(c);
};

// fun2();

// let cube = (a) => a ** 3;
let cube = (a, b) => a * b;

// let ans = cube(2);
// console.log(cube(3,2));

// Anonymous function

let hello = function () {
  return "Hello World";
};
// let ans = hello();

// console.log(ans);

let hello1 = function (a) {
  return "Hello World";
};

// hello1(12);
// console.log(typeof 12);

// synchronous programming
console.log("first");
console.log("second");

//asynchronous programming
console.log("first");
console.log("second");
setTimeout(() => {
  console.log("settimeout");
}, 4000);
setTimeout(() => {
  console.log("settimeout");
}, 4000);
console.log("third");
console.log("fourth");
