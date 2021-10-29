import LETTERS from "../data/letters";
import type { Letter } from "../data/letters";
import type { Step } from "./Step";

const add: (n: number | Letter) => Step = (a) => (c, i, decode) => {
    if (typeof a === "string") {
      a = LETTERS.indexOf(a);
    }
    const cIndex = LETTERS.indexOf(c);

    if (decode) {
      return LETTERS[(LETTERS.length + cIndex - a) % LETTERS.length];
    } else {
      return LETTERS[(a + cIndex) % LETTERS.length];
    }
  };



export default add;