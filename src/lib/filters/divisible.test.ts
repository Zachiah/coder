import divisible from './divisible';


describe("Tests divisibiliy accurately", () => {
    it("should return true when divisible", () => {
        expect(divisible(2)(2)).toBe(true);
        expect(divisible(2)(4)).toBe(true);
        expect(divisible(2)(6)).toBe(true);
        expect(divisible(2)(8)).toBe(true);
        expect(divisible(2)(10)).toBe(true);

        expect(divisible(3)(3)).toBe(true);
        expect(divisible(3)(6)).toBe(true);
        expect(divisible(3)(9)).toBe(true);
        expect(divisible(3)(12)).toBe(true);
        expect(divisible(3)(15)).toBe(true);

        expect(divisible(4)(4)).toBe(true);
        expect(divisible(4)(8)).toBe(true);
        expect(divisible(4)(12)).toBe(true);
        expect(divisible(4)(16)).toBe(true);
        expect(divisible(4)(20)).toBe(true);


        expect(divisible(5)(5)).toBe(true);
        expect(divisible(5)(10)).toBe(true);
        expect(divisible(5)(15)).toBe(true);
        expect(divisible(5)(20)).toBe(true);
        expect(divisible(5)(25)).toBe(true);

        expect(divisible(6)(6)).toBe(true);
        expect(divisible(6)(12)).toBe(true);
        expect(divisible(6)(18)).toBe(true);
        expect(divisible(6)(24)).toBe(true);
        expect(divisible(6)(30)).toBe(true);

        expect(divisible(7)(7)).toBe(true);
        expect(divisible(7)(14)).toBe(true);
        expect(divisible(7)(21)).toBe(true);
        expect(divisible(7)(28)).toBe(true);
        expect(divisible(7)(35)).toBe(true);

        expect(divisible(8)(8)).toBe(true);
        expect(divisible(8)(16)).toBe(true);
        expect(divisible(8)(24)).toBe(true);
        expect(divisible(8)(32)).toBe(true);
        expect(divisible(8)(40)).toBe(true);

        expect(divisible(9)(9)).toBe(true);
        expect(divisible(9)(18)).toBe(true);
        expect(divisible(9)(27)).toBe(true);
        expect(divisible(9)(36)).toBe(true);
        expect(divisible(9)(45)).toBe(true);

        expect(divisible(10)(10)).toBe(true);
        expect(divisible(10)(20)).toBe(true);
        expect(divisible(10)(30)).toBe(true);
        expect(divisible(10)(40)).toBe(true);
        expect(divisible(10)(50)).toBe(true);
    });
    it("should return false when not divisible", () => {
        expect(divisible(2)(1)).toBe(false);
        expect(divisible(2)(3)).toBe(false);
        expect(divisible(2)(5)).toBe(false);
        expect(divisible(2)(7)).toBe(false);
        expect(divisible(2)(9)).toBe(false);
        expect(divisible(2)(11)).toBe(false);

        expect(divisible(3)(1)).toBe(false);
        expect(divisible(3)(2)).toBe(false);
        expect(divisible(3)(4)).toBe(false);
        expect(divisible(3)(5)).toBe(false);
        expect(divisible(3)(7)).toBe(false);
        expect(divisible(3)(8)).toBe(false);
        expect(divisible(3)(10)).toBe(false);
        expect(divisible(3)(11)).toBe(false);
        expect(divisible(3)(13)).toBe(false);
        expect(divisible(3)(14)).toBe(false);

        expect(divisible(4)(1)).toBe(false);
        expect(divisible(4)(2)).toBe(false);
        expect(divisible(4)(3)).toBe(false);
        expect(divisible(4)(5)).toBe(false);
        expect(divisible(4)(6)).toBe(false);
        expect(divisible(4)(7)).toBe(false);
        expect(divisible(4)(9)).toBe(false);
        expect(divisible(4)(10)).toBe(false);
        expect(divisible(4)(11)).toBe(false);
        expect(divisible(4)(13)).toBe(false);
        expect(divisible(4)(14)).toBe(false);
        expect(divisible(4)(15)).toBe(false);
        expect(divisible(4)(17)).toBe(false);
        expect(divisible(4)(18)).toBe(false);

        expect(divisible(5)(1)).toBe(false);
        expect(divisible(5)(2)).toBe(false);
        expect(divisible(5)(3)).toBe(false);
        expect(divisible(5)(4)).toBe(false);
        expect(divisible(5)(6)).toBe(false);
        expect(divisible(5)(7)).toBe(false);
        expect(divisible(5)(8)).toBe(false);
        expect(divisible(5)(11)).toBe(false);
        expect(divisible(5)(12)).toBe(false);
        expect(divisible(5)(13)).toBe(false);
        expect(divisible(5)(14)).toBe(false);
        expect(divisible(5)(16)).toBe(false);
        expect(divisible(5)(17)).toBe(false);
        expect(divisible(5)(18)).toBe(false);
        expect(divisible(5)(19)).toBe(false);

    });
});
