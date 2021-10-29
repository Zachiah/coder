import type { Filter } from "./Filter";

const perfectSquare: Filter = (n) => {
  const sqrt = Math.sqrt(n);
  return sqrt % 1 === 0;
};

export default perfectSquare;
