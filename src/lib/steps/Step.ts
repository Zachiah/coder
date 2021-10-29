import type { Letter } from "../data/letters";

export type Step = (c: Letter, i: number, decode: boolean) => Letter;
