// console.log("Train task ishga tushdi");
// console.log("------------------------------");

// console.log("Jack Ma maslahatlari:");
// const list = [
//   " Yaxshi talaba boling", // 0-20
//   " Togri boshliq tanlang va koproq hato qiling", // 20-30
//   " Ozingizga ishlashni boshlang", // 30-40
//   " Siz kuchli bolgan narsalarni qiling", // 40-50
//   "Yoshlarga sarmoya kiring", // 50-60
//   " Endi dam oling, foydasi yoq", // 60+
// ];

// function JackMaslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout (function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here");
// JackMaslahatBering(98, (err, data) => {
//   if (err) console.log("ERROR: ", err);
//   else{
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// -----Async version with Promise-----

// console.log("Jack Ma maslahatlari:");
// const list = [
//   " Yaxshi talaba boling", // 0-20
//   " Togri boshliq tanlang va koproq hato qiling", // 20-30
//   " Ozingizga ishlashni boshlang", // 30-40
//   " Siz kuchli bolgan narsalarni qiling", // 40-50
//   "Yoshlarga sarmoya kiring", // 50-60
//   " Endi dam oling, foydasi yoq", // 60+
// ];

// async function JackMaslahatBering(a,) {
//   if (typeof a !== "number") throw new Error("insert number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return list[5];
    // setTimeout (function () {
    //   callback(null, list[5]);
    // }, 1000);
  
// then/catch
// console.log("passed here");
// JackMaslahatBering(25).then((data) => {
//     console.log("javob:", data);
// }).catch((err) => {
//     console.log("ERROR: ", err.message);
// });
// console.log("passed here 1");

// async function run() {
//   let javob = await JackMaslahatBering(20);
//   console.log("javob:", javob);
//   javob = await JackMaslahatBering(31);
//   console.log("javob:", javob);
//   javob = await JackMaslahatBering(41);
//   console.log("javob:", javob);
// }
// run();

// A task

function countLetter(letter, word) {
  let count = 0;
  for (let harf of word) 
    if (harf === letter) count++;
  return count;
}
console.log("test");

console.log(countLetter("a", "banana"));
console.log("------------------------------")
console.log(countLetter("e", "engineer"));