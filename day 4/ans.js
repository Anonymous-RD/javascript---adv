// function main(num , pall. arm){
//     let out = pall(num,arm)
// }
// function pallindrome(val, callback){
//    let ans =  callback(val)

// //    -----functionality
// }
// function armstrong(num){
// // ----functionality
// }

// main(1, pallindrome, armstrong)

function one(val) {
  let res = val ** 2;
  console.log(res);
  return res;
}
function two(val) {
  let res = one(val);
  let output = res ** 2;
  console.log(output);
  return output;
}
function three(val) {
  let res = two(val);
  let output = res ** 2;
  console.log(output);
  return output;
}

// one(2)
two(2);
three(2);

// function main(){

// }

// main(()=>{
//  function(){
//     one(1,()=>{
//         two(2,()=>{
//         console.log("two")
//     })
//     console.log("one")
//     })
//     console.log("main")
//  }
// })
