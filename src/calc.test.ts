import { sum } from "../src/calc";

describe("test add function", () => {
    it("should return 15 for sum(10,5)", () => {
        expect(sum(10,5)).toBe(15);
    });
})