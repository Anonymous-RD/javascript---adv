// // async await -

// function one() {
//   let p = new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("user logged in");
//       res("delivered");
//       //   rej("not delivered");
//     }, 2000);
//   });
//   return p;
// }
// function two() {
//   let p = new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("added to cart");
//       res("delivered");
//       //   rej("not delivered");
//     }, 2000);
//   });
//   return p;
// }
// function three() {
//   let p = new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("payment successful");
//       res("delivered");
//       //   rej("not delivered");
//     }, 2000);
//   });
//   return p;
// }

async function mainfunction() {
  console.log("first");
  await one();
  await two();
  await three();
  console.log("last");
}

// mainfunction();

const array = [1, 2, 3, 4];

// reduce method
// 0 + 1 + 2 + 3 + 4
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sumWithInitial);

// acc = 6
// crr = 4

// map
let out = array.map((val) => val ** 2);
console.log(out);

// filter

let out = array.filter((val) => val % 2 == 0);
console.log(out);
