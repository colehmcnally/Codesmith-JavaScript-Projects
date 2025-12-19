function cascade(number) {
  console.log(number); // console log our number passed in
  if (number >= 10) { // if our number has more than 1 digit...
    cascade(Math.floor(number / 10)); // recursively call our function with the number with 1 less digit
    console.log(number); // console log our number again;
  }
}

cascade(111)
// // should print
// /*
// 111
// 11
// 1
// 11
// 111
// */


// steps
// cascade(111) starts:
//   console.log(111)              → prints 111
//   111 >= 10? Yes, so enter the if block
//   cascade(11)                   → calls cascade(11), we WAIT here until it finishes
  
//     cascade(11) starts:
//       console.log(11)           → prints 11
//       11 >= 10? Yes, so enter the if block
//       cascade(1)                → calls cascade(1), we WAIT here until it finishes
      
//         cascade(1) starts:
//           console.log(1)        → prints 1
//           1 >= 10? No, skip the if block
//         cascade(1) ends (returns undefined, but nobody cares)
      
//       console.log(11)           → prints 11 (we're back from waiting!)
//     cascade(11) ends (returns undefined, but nobody cares)
  
//   console.log(111)              → prints 111 (we're back from waiting!)
// cascade(111) ends