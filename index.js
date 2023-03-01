"use strict";

const dice = document.querySelector(".dice");
const contaier = document.querySelector(".container");
console.log(dice, contaier);

const link = "https://api.adviceslip.com/advice";

const request = new XMLHttpRequest();
request.open("get", link);
request.send();
console.log(request);

request.addEventListener("load", function () {
  console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  console.log(data);

  const html = `
  <div class="card">
        <h1 class="heading">ADVICE #${data.slip.id}</h1>
        <p class="text">${data.slip.advice}</p>
        <img
          src="images/pattern-divider-desktop.svg"
          alt="pattern-divider"
          class="divider"
        />
      </div>
      <div class="dice">
        <img src="images/icon-dice.svg" alt="icon-dices" />
      </div>
  `;

  contaier.insertAdjacentHTML("beforeend", html);
});
