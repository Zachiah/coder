import type { Letter } from "../data/letters";
import add from "./add";
import type { Step } from "./Step";

const password: (pass: Letter[]) => Step = (pass) => (c, i, decode) => {
  return add(pass[i % pass.length])(c, i, decode);
};

export default password;
