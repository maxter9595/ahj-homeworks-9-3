/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Liker.js
class Liker {
  constructor(buttonSelector) {
    this.button = document.querySelector(buttonSelector);
    this.toggle = true;
    this.init();
  }
  init() {
    this.button.addEventListener("click", event => this.handleClick(event));
  }
  handleClick(event) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${event.target.offsetWidth / 2 - 20}px`;
    heart.style.top = `-30px`;
    heart.style.animation = this.toggle ? "floatHeart1 500ms ease-out forwards" : "floatHeart2 500ms ease-out forwards";
    this.toggle = !this.toggle;
    event.target.appendChild(heart);
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  new Liker(".like-btn");
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;