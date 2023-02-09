import { sum } from "./calc";

describe("test add function", () => {
    it("should return 20 for sum(10,10)", () => {
        expect(sum(10,10)).toBe(20);
    });
})