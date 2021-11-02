import fibonacci from "./fibonacci";

describe(fibonacci, () => {
    it("returns true for numeric inputs that are fibonacci numbers", () => {
        expect(fibonacci(0)).toBe(true);
        expect(fibonacci(1)).toBe(true);
        expect(fibonacci(2)).toBe(true);
        expect(fibonacci(3)).toBe(true);
        expect(fibonacci(5)).toBe(true);
        expect(fibonacci(8)).toBe(true);
        expect(fibonacci(13)).toBe(true);
        expect(fibonacci(21)).toBe(true);

    });
    
    it("returns false for numeric inputs that aren't fibonacci numbers", () => {
        expect(fibonacci(4)).toBe(false);
        expect(fibonacci(6)).toBe(false);
        expect(fibonacci(7)).toBe(false);
        expect(fibonacci(9)).toBe(false);
        expect(fibonacci(10)).toBe(false);
        expect(fibonacci(11)).toBe(false);
        expect(fibonacci(12)).toBe(false);
        expect(fibonacci(14)).toBe(false);
    })
})