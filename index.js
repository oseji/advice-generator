"use strict";

const dice = document.querySelector(".dice");
const text = document.querySelector(".text");
const heading = document.querySelector(".heading");
let numberID;

console.log(dice, text);

//FUNCTION TO GENERATE ADVICE TEXT & ID
const randomAdviceGenerator = function (id) {
  const adviceRequest = new XMLHttpRequest();
  adviceRequest.open("get", `https://api.adviceslip.com/advice/${id}`);
  adviceRequest.send();

  adviceRequest.addEventListener("load", function () {
    const adviceData = JSON.parse(this.responseText);
    console.log(adviceData);

    const advice = `
    ${adviceData.slip.advice}    
  `;
    const adviceTag = `ADVICE #${adviceData.slip.id}    
  `;
    text.textContent = advice;
    heading.textContent = adviceTag;
  });
};

//FUNCTION TO GENERATE A RANDOM NUMBER BETWEEN A CERTAIN RANGE
const randomNumber = function (min, max) {
  const number = Math.trunc(Math.random() * (max - min) + 1) + min;
  console.log(number);
  return number;
};

//DICE CLICK TO GENERATE NEW QUOTE
dice.addEventListener("click", function () {
  randomNumber(0, 200);
  randomAdviceGenerator(randomNumber(0, 200));
});
