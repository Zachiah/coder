import type { Letter } from "../data/letters";
import type action from "./action";

type steps = ReturnType<ReturnType<typeof action>>[];

export const decode = (
  text: Letter[],
  steps: steps
) => {
  return steps.reverse().reduce((t: Letter[], step) => {
    return step(t)(true);
  }, text);
};

export const encode = (text: Letter[], steps: steps) => {
  return steps.reduce((t: Letter[], step) => {
    return step(t)(false);
  }, text);
};
