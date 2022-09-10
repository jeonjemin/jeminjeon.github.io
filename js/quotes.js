const quotes = [
  {
    quote: "1",
    author: "a",
  },
  {
    quote: "2",
    author: "b",
  },
  {
    quote: "3",
    author: "c",
  },
  {
    quote: "4",
    author: "d",
  },
  {
    quote: "5",
    author: "e",
  },
  {
    quote: "6",
    author: "f",
  },
  {
    quote: "7",
    author: "g",
  },
  {
    quote: "8",
    author: "h",
  },
  {
    quote: "9",
    author: "i",
  },
  {
    quote: "10",
    author: "j",
  }
];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote["quote"];
author.innerText=todaysQuote["author"];
// randomness
// // Math 모듈
// Math.random()은 0~1 의 랜덤 숫자 반환.
// float -> int 1)round, 반올림 2)ceil, 올림 3)floor 내림