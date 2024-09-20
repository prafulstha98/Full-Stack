// const employee = {
//   name: "Prachanda Rana",
//   age: 23,
//   salary: 45000,
//   isDeveloper: true,
// };

// employee.age = 25;

// const product = {
//   name: "Parket Jotter Standard CT Ball Pen(Black)",
//   ratings: 4.5,
//   deal: "Deal of the day",
//   Price: 270,
// };

// const profile = {
//   name: "Shradha Khapra",
//   isFollowing: true,
//   posts: 195,
//   Followers: 569000,
// };

// let a = 43,
//   b = 5;
// console.log(a % b);
// console.log(a ** b);

//unary operators
// let a = 43,
//   b = 5;
// console.log(a++);
// console.log(a);

// console.log(--b);
// console.log(b);

//assignment operators
// let a = 43,
//   b = 5;

// a -= 10;
// console.log(a);

//Comparison Operators
// let a = 43,
//   b = 5;

// console.log(a == b);
// console.log(a != b);

//Logical Operators
// let a = 43,
//   b = 5;

// let cond1 = a < b;
// let cond2 = a != b;
// console.log(!cond2);

//Conditional Statements
// let salary = 34000;

// if (salary > 35000) {
//   console.log("You're a highly paid employee");
// } else {
//   console.log("You're compensated well");
// }

// let age = 25;
// let num = age >= 16 ? "Adult" : "Not Adult";
// console.log(num);

// let num = prompt("Enter a number");

// if (num % 5 == 0) {
//   console.log(num + " is a multiple of 5");
// } else {
//   console.log(num + " is not a multiple of 5");
// }

// let marks = prompt("Enter marks(0-100)");
// let grade;
// if (marks >= 90 && marks <= 100) {
//   grade = "A";
// } else if (marks >= 70 && marks <= 89) {
//   grade = "B";
// } else if (marks >= 60 && marks <= 69) {
//   grade = "C";
// } else if (marks >= 50 && marks <= 59) {
//   grade = "D";
// } else if (marks >= 0 && marks <= 49) {
//   grade = "F";
// }

// console.log("As per your marks, your grade was", grade);

//Print a statement 5 times
// for (let i = 1; i >= 0; i++) {
//   console.log("i", i);
// }

//print difference of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum - i;
// }
// console.log("sum: ", sum);

// let i = 1;
// while (i <= 5) {
//   console.log("i =", i);
//   i++;
// }

// let i = 50;
// do {
//   console.log("MERN Stack");
//   i++;
// } while (i <= 5);

//for-of loop
// let str = "MERN Stack";
// let size = 0;
// for (let i of str) {
//   console.log("i =", i);
//   size++;
// }
// console.log("Size of string =", size);

//for in loop
const student = {
  name: "Arbin Maharjan",
  roll_no: 4,
  age: 20,
  isPass: true,
};

for (let key in student) {
  console.log("value =", student[key]);
}

//print numbers from 0 to 100 Qs.1

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 != 0) {
//     console.log("i =", i);
//   }
// }

//Practice Qs. 2
// let gameNum = 3432;
// let userNum = prompt("Enter the number: ");
// while (userNum != gameNum) {
//   userNum = prompt("You entered the wrong number. Please try again!!!");
// }
// console.log("You entered the right number.");
