import perfectSquare from "./perfectSquare";

describe(perfectSquare, () => {
    it("should return true for numbers that are perfect squares", () => {
        expect(perfectSquare(1)).toBe(true);
        expect(perfectSquare(4)).toBe(true);
        expect(perfectSquare(9)).toBe(true);
        expect(perfectSquare(16)).toBe(true);
        expect(perfectSquare(25)).toBe(true);
        expect(perfectSquare(36)).toBe(true);
        expect(perfectSquare(49)).toBe(true);
        expect(perfectSquare(64)).toBe(true);
        expect(perfectSquare(81)).toBe(true);
        expect(perfectSquare(100)).toBe(true);
        expect(perfectSquare(121)).toBe(true);
        expect(perfectSquare(144)).toBe(true);
        expect(perfectSquare(169)).toBe(true);
        expect(perfectSquare(196)).toBe(true);
        expect(perfectSquare(225)).toBe(true);
        expect(perfectSquare(256)).toBe(true);
    })

    it("should return false for numbers that aren't perfect squares", () => {
        expect(perfectSquare(2)).toBe(false);
        expect(perfectSquare(3)).toBe(false);
        expect(perfectSquare(5)).toBe(false);
        expect(perfectSquare(6)).toBe(false);
        expect(perfectSquare(7)).toBe(false);
        expect(perfectSquare(8)).toBe(false);
        expect(perfectSquare(10)).toBe(false);
        expect(perfectSquare(11)).toBe(false);
        expect(perfectSquare(12)).toBe(false);

        expect(perfectSquare(101)).toBe(false);
        expect(perfectSquare(102)).toBe(false);
        expect(perfectSquare(103)).toBe(false);
        expect(perfectSquare(104)).toBe(false);
        expect(perfectSquare(105)).toBe(false);
        expect(perfectSquare(106)).toBe(false);
        expect(perfectSquare(107)).toBe(false);
        expect(perfectSquare(108)).toBe(false);
        expect(perfectSquare(109)).toBe(false);

        expect(perfectSquare(201)).toBe(false);
        expect(perfectSquare(202)).toBe(false);
        expect(perfectSquare(203)).toBe(false);
        expect(perfectSquare(204)).toBe(false);

        expect(perfectSquare(301)).toBe(false);
        expect(perfectSquare(302)).toBe(false);

        expect(perfectSquare(401)).toBe(false);

        expect(perfectSquare(501)).toBe(false);
    })
});