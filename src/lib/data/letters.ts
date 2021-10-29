const LETTERS = [
    "a", "A", "b", "B",
    "c", "C", "d", "D",
    "e", "E", "f", "F",
    "g", "G", "h", "H",
    "i", "I", "j", "J",
    "k", "K", "l", "L",
    "m", "M", "n", "N",
    "o", "O", "p", "P",
    "q", "Q", "r", "R",
    "s", "S", "t", "T",
    "u", "U", "v", "V",
    "w", "W", "x", "X",
    "y", "Y", "z", "Z",
    "0", "1", "2", "3",
    "4", "5", "6", "7",
    "8", "9", " ", ".",
    ",", "?", "!", ":",
    ";", "*", "&", "^",
    "%", "$", "#", "@",
    "~", "`", "(", ")",
    "-", "_", "+", "=",
    "[", "{", "]", "}",
    "/", "\\", "|", "\"",
    "'",
] as const;

// throw an error if letters has duplicates
if (LETTERS.length !== new Set(LETTERS).size) {
  throw new Error("letters has duplicates");
}

export default LETTERS;

export type Letter = typeof LETTERS[number];
