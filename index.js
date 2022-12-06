const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generatePasswordButton = document.querySelector("#generatePasswordButton");
const randomPassword1 = document.querySelector("#randomPassword1");
const randomPassword2 = document.querySelector("#randomPassword2");

generatePasswordButton.onclick = () => {
  randomPassword1.textContent = "";
  randomPassword2.textContent = "";

  for (let i = 0; i < 15; i++) {
    randomIndex1 = Math.floor(Math.random() * characters.length) + 1;
    randomIndex2 = Math.floor(Math.random() * characters.length) + 1;

    randomPassword1.textContent += characters[randomIndex1];
    randomPassword2.textContent += characters[randomIndex2];
  }

  randomPassword1.style.display = "block";
  randomPassword2.style.display = "block";
};
