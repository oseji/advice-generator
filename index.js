"use strict";

const dice = document.querySelector(".dice");
const text = document.querySelector(".text");
const heading = document.querySelector(".heading");
let numberID;

console.log(dice, text);

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

dice.addEventListener("click", function (e) {
  const randomNumber = function (min, max) {
    const number = Math.trunc(Math.random() * (max - min) + 1) + min;
    console.log(number);
    return number;
  };
  randomNumber(0, 200);

  randomAdviceGenerator(randomNumber(0, 200));
});
