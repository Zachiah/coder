import type { Letter } from "../src/lib/data/letters";
import {encode,decode} from "../src/lib/util/code";
import STEPS from "../src/lib/data/steps";

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
test("encode and decode", () => {
    for (const message of messages) {
        const encoded = encode(message, STEPS);
        const decoded = decode(encoded, STEPS);
        expect(decoded).toEqual(message);
    }
});