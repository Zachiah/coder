import type { Filter } from "./Filter";

const divisible: (n) => Filter = (n) => (x) => x % n === 0;

export default divisible;
