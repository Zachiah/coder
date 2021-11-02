import type { Letter } from "../data/letters";
import {encode,decode} from "./code";
import STEPS from "../data/steps";

// A lot of random strings to test
const messages = [
    "a",
    "abc",
    "abcd",
    "abcde",
    "?2294387LJKI",
    "?2294387LJKI Hello",
    "Hello there how are you?",
    "Hello there how are you? I am fine thank you",
    "You stink?",
    "You stink? I am fine thank you",
    "@#*($&SDLKIJWEOIUR",
    "@#*($&SDLKIJWEOIUR Hello",
].map(s => s.split('')) as Letter[][];

// test that encoding and decoding the same message does nothing
describe("encode and decode", () => {
    it('should do nothing to text when passing through encode and decode', () => {
        messages.forEach(message => {
            expect(decode(encode(message,STEPS),STEPS)).toEqual(message);
        });
    });
});