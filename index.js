// const na = 24;
// console.log(na);

// // generate a random number
// let randomNum = Math.floor(Math.random() * 100) + 1;

// //randomNum = Math.round(randomNum);
// console.log(randomNum);

// to get random numbers from 50 to 100

// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// let min = 1;
// let max = 100;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function () {
//   randomNum1 = Math.floor(Math.random() * max) + min;
//   randomNum2 = Math.floor(Math.random() * max) + min;
//   randomNum3 = Math.floor(Math.random() * max) + min;
//   label1.innerHTML = randomNum1;
//   label2.innerHTML = randomNum2;
//   label3.innerHTML = randomNum3;
// };

// IF statements: if a codnition is true then execute some code
//               : if not, then execute the else statement

// let age = 33;

// if (age >= 18) {
//   console.log("you are eligible to vote for the election");
// } else {
//   console.log("you are not eligible to vote for the election");
// }

// let time = 14;

// if (time < 12) {
//   console.log("good morning");
// } else {
//   console.log("good afternoon");
// }

// with boolean varibales

// let iStudent = false;
// if (iStudent) {
//   console.log("you are a student");
// } else {
//   console.log("you are not a student");
// }

// let age = 15;
// if (age >= 18) {
//   console.log("you are old enough to drive the vehicle");
// } else {
//   console.log("You must be 16+ to have a licence to drive the vehicle");
// }

//let age = 19;
// let hasLicence = false;
// if (age >= 18) {
//   console.log("you are old enough to drive the vehicle");
//   if (hasLicence) {
//     console.log("you have your won licence");
//   } else {
//     console.log("But!! you do not have your own licence");
//   }
// } else {
//   console.log("You must be 16+ to have a licence to drive the vehicle");
// }

// lets discuss if else statements

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function () {
//   age = myText.value;
//   age = Number(age);

//   if (age >= 100) {
//     resultElement.textContent = "You are TOO OLD to enter this site";
//   } else if (age == 0) {
//     resultElement.textContent =
//       "You can't enter the site. Bcoz you were just born";
//   } else if (age > 18) {
//     resultElement.textContent = "you are old enough to enter the site";
//   } else if (age < 0) {
//     resultElement.textContent = "your age can't be below 0";
//   } else {
//     resultElement.textContent = "you must be 18+ to enter the site";
//   }
// };

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const americanExpressBtn = document.getElementById("americanExpressBtn");
const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = "You are subscribed to our website.";
  } else {
    subResult.textContent = "You are not subscribed to our website.";
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa.`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You are paying with masterCard.`;
  } else if (paypalBtn.checked) {
    paymentResult.textContent = `You are paying with paypal.`;
  } else if (americanExpressBtn.checked) {
    paymentResult.textContent = `You are paying with American Express.`;
  } else {
    paymentResult.textContent = `You must select a payment type.`;
  }
};
