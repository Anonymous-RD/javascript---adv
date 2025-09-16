// // function main(a, fun) {
// //   fun(2);
// // }

// // function sum(a) {
// //   let a = 10 + 20;
// //   console.log(a);
// // }

// // main(10, sum);

// // let a = 10;
// // let b = a;
// // let arr = [1, 23, 3];
// // let arr1 = arr;
// // arr1.push(12);
// // console.log("arr1", arr1);
// // console.log("arr", arr);
// function check(a, fun, fun2) {
//   // a= 2,
//   // fun = cube,
//   // fun2 = sqr
//   let ans = fun(a, fun2);
//   //   a= 2
//   //   fun2 = sqr
//   console.log(ans);
// }
// function cube(val, good) {
//   // fun = sqr
//   // val =2
//   let out1 = good(val);
//   console.log(out1);
//   return val ** 3;
// }
// function sqr(val) {
//   return val ** 2;
// }

// check(3, cube, sqr);
// // console.log(output);

function main(fun1, fun2) {
  let a = fun1();
  let b = fun2();
  return { a, b };
}
// function add() {
//   return 2 + 2;
// }
// function sub() {
//   return 2 - 2;
// }
let out = main(
  () => {
    return 2 + 2;
  },
  () => {
    return 2 - 2;
  }
);
console.log(out.a);
console.log(out.b);

// {let p = new Promise((res, rej) => {
//   console.log("inside");
//   res("finished");
// });
// p.then(() => {
//   console.log("first");
// });
// console.log(p);

// function loginUser(username, password, successCallback, errorCallback) {
//   console.log("Logging in...");
//   setTimeout(() => {
//     if (username === "rohit" && password === "1234") {
//       successCallback({ userId: 1, name: "Rohit" });
//     } else {
//       errorCallback("❌ Invalid credentials");
//     }
//   }, 1000);
// }

// function loadHomePage(user, successCallback, errorCallback) {
//   console.log("Loading home page...");
//   setTimeout(() => {
//     if (user) {
//       successCallback({ page: "home", user: user });
//     } else {
//       errorCallback("❌ Failed to load home page");
//     }
//   }, 1000);
// }

// function likePost(postId, successCallback, errorCallback) {
//   console.log("Liking post...");
//   setTimeout(() => {
//     if (postId) {
//       successCallback({ success: true, postId });
//     } else {
//       errorCallback("❌ Failed to like post");
//     }
//   }, 1000);
// }

// // ----------- CALLBACK HELL -------------
// loginUser(
//   "rohit",
//   "1234",
//   function (user) {
//     console.log("user", user);
//     loadHomePage(
//       user,
//       function (page) {
//         likePost(
//           101,
//           function (result) {
//             console.log(`✅ Post ${result.postId} liked!`);
//             console.log("All steps completed ✅");
//           },
//           function (err) {
//             console.log(err);
//           }
//         );
//       },
//       function (err) {
//         console.log(err);
//       }
//     );
//   },
//   function (err) {
//     console.log(err);
//   }
// );}

function handle(login, homepage, like) {
  login(function () {
    homepage(function () {
      like();
    });
  });

  //   login(homepage(like()));   --- will not wotk for like
}

//dont use next variable while running this code
function handleLogin(next) {
  console.log(next);
  console.log("User logged in ✅");
  //   setTimeout(() => {
  //     next(); // go to homepage
  //   }, 500);
}

function handleHomepage(next) {
  console.log("Home page loaded 🏠");
  //   setTimeout(() => {
  //     next(); // go to like
  //   }, 500);
}

function handleLike() {
  console.log("Post liked ❤️");
  //   setTimeout(() => {}, 500);
}

// ---------- START FLOW ----------
handle(handleLogin, handleHomepage, handleLike);

//-----------------simple
// {function handle(login, homepage, like) {
//   setTimeout(() => {
//     login();
//     setTimeout(() => {
//       homepage();
//       setTimeout(() => {
//         like();
//       }, 500);
//     }, 500);
//   }, 500);
// }

// function handleLogin() {
//   console.log("User logged in ✅");
// }

// function handleHomepage() {
//   console.log("Home page loaded 🏠");
// }

// function handleLike() {
//   console.log("Post liked ❤️");
// }

// // ----------- START FLOW -----------
// handle(handleLogin, handleHomepage, handleLike);
// }

// {
//     // using promises example
//     function login() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("User logged in ✅");
//       resolve(); // next step
//     }, 500);
//   });
// }

// function homepage() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Home page loaded 🏠");
//       resolve(); // next step
//     }, 500);
//   });
// }

// function like() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Post liked ❤️");
//       resolve();
//     }, 500);
//   });
// }

// // --------- PROMISE CHAIN ----------
// login()
//   .then(() => homepage())
//   .then(() => like())
//   .then(() => {
//     console.log("All steps completed ✅");
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// }
