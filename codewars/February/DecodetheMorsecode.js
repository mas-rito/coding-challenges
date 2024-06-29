// Decode the Morse code
// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
// 26 February 2024

decodeMorse = function (morseCode) {
  const morseMap = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "...---...": "SOS",
    "-.-.--": "!",
    ".-.-.-": ".",
  };

  let words = morseCode.trim().split("   ");

  const decodeWords = words.map((word) => {
    let chars = word.split(" ");

    return chars.map((char) => morseMap[char]).join("");
  });

  return decodeWords.join(" ");
};

console.log(
  decodeMorse(
    "      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  "
  )
);
