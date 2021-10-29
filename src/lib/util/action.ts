import type { Letter } from "../data/letters";
import LETTERS from "../data/letters";
import type { Filter } from "../filters/Filter";
import type { Step } from "../steps/Step";

const action =
  (filter: Filter) => (step: Step) => (text: Letter[]) => (decode: boolean) => {
    return text.map((c, i) => {
      if (!LETTERS.includes(c)) {
        return c;
      }

      if (filter(i)) {
        return step(c, i, decode);
      }
      return c;
    });
  };

export default action;
