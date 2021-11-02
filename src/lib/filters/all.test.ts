import all from "./all";

describe("all should function properly", () => {
    it("should return true for any numeric input", () => {
        expect(all(1)).toBe(true);
        expect(all(2)).toBe(true);
        expect(all(3)).toBe(true);
        expect(all(4)).toBe(true);

        expect(all(0)).toBe(true);
        
        expect(all(-1)).toBe(true);
        expect(all(-2)).toBe(true);
        expect(all(-3)).toBe(true);
        expect(all(-4)).toBe(true);
    })
})