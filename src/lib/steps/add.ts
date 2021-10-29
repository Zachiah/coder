import LETTERS from "../data/letters";
import type { Letter } from "../data/letters";
import type { Step } from "./Step";

const add: (n: number | Letter) => Step = (a) => (c, i, decode) => {
    if (typeof a === "string") {
      a = LETTERS.indexOf(a);
    }

    if (decode) {
      return LETTERS[(LETTERS.length + LETTERS.indexOf(c) - a) % LETTERS.length];
    } else {
      return LETTERS[(LETTERS.length + a + LETTERS.indexOf(c)) % LETTERS.length];
    }
  };



export default add;