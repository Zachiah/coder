import LETTERS, { Letter } from "../data/letters";

const asPassword = (pass: string) => {
    const arr = pass.split('');
    arr.forEach((char, index) => {
        if (!LETTERS.includes(char as Letter)) {
            throw new Error(`${char} is not a valid character`);
        }
    });
    return arr;
}