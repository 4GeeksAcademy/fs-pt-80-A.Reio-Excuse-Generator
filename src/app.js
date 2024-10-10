/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excusa = document.querySelector("#excusa");

window.onload = function() {};

const quien = [
  "Mi profesor ",
  "Mi hermano ",
  "El párroco ",
  "Una multitud enfurecida "
];
const hizo = [
  "arrancó de mis manos ",
  "lanzó por los aires ",
  "vendió por wallapop ",
  "cambió por unos tazos "
];
const aQue = [
  "la dentadura de mi abuela ",
  "los dos últimos chicles ",
  "mis medicinas ",
  "mi nintendo switch "
];
const cuando = [
  "mientras ayudaba a un ciego.",
  "mientras yo rezaba.",
  "durante mi segunda siesta.",
  "cuando estaba despistado."
];

const opciones = array => Math.floor(Math.random() * array.length);
const miExcusa = array => array[opciones(array)];

const frase = document.getElementById("excusa");

frase.textContent =
  miExcusa(quien) + miExcusa(hizo) + miExcusa(aQue) + miExcusa(cuando);

console.log(miExcusa(quien));
console.log(miExcusa(hizo));
console.log(miExcusa(aQue));
console.log(miExcusa(cuando));
