// let dt = new Date();
// console.log(dt.getDate());

// let p = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("inside promise");
//     // res("delivered");
//     rej("not delivered");
//   }, 2000);
// });
// .then is executed when promise is resolved
// .catch is executed when promise not resolved
// .finally will always execute at the last

// console.log(p);
// p.then(() => {
//   console.log("inside then");
// });
// p.catch((er) => {
//   console.log("your order is", er);
// });

function one() {
  let p = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("user logged in");
      res("delivered");
      //   rej("not delivered");
    }, 2000);
  });
  return p;
}
function two() {
  let p = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("added to cart");
      res("delivered");
      //   rej("not delivered");
    }, 2000);
  });
  return p;
}
function three() {
  let p = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("payment successful");
      res("delivered");
      //   rej("not delivered");
    }, 2000);
  });
  return p;
}
// let out = one();
// console.log(out);
// out.then(() => {
//   console.log("inside then");
// });
// out.catch((err) => {
//   console.log("not delivered", err);
// });

// one()
//   .then(() => {
//     console.log("inside then");
//   })
//   .catch(() => {
//     console.log("inside catch");
//   })
//   .finally(() => {
//     console.log("inside finally");
//   });

one(2).then(() => {
  two(3).then(() => {
    three(4).then(() => {
      console.log("delivery in 30 sept");
    });
  });
});
