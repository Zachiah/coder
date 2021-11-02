import prime from './prime';

describe(prime, () => {
    it("should return true for numbers that are prime", () => {
        expect(prime(2)).toBe(true);
        expect(prime(3)).toBe(true);
        expect(prime(5)).toBe(true);
        expect(prime(7)).toBe(true);
        expect(prime(11)).toBe(true);
        expect(prime(13)).toBe(true);
        expect(prime(17)).toBe(true);
        expect(prime(19)).toBe(true);
        expect(prime(23)).toBe(true);
    })

    it("should return false for numbers that are not prime", () => {
        expect(prime(0)).toBe(false);
        expect(prime(1)).toBe(false);
        expect(prime(4)).toBe(false);
        expect(prime(6)).toBe(false);
        expect(prime(8)).toBe(false);
        expect(prime(9)).toBe(false);
        expect(prime(10)).toBe(false);
        expect(prime(12)).toBe(false);
        expect(prime(14)).toBe(false);
        expect(prime(15)).toBe(false);
        expect(prime(16)).toBe(false);
        expect(prime(18)).toBe(false);
        expect(prime(20)).toBe(false);
    })
})