const classifyTriangle = require("./classifyTriangle");

describe("classifyTriangle: Required input conditions -  See readme for more details", () => {
    test("should classify an Equilateral triangle", () => {
        expect(classifyTriangle(10, 10, 10)).toBe("Equilateral");
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test("should classify an Isosceles triangle", () => {
        expect(classifyTriangle(10, 10, 5)).toBe("Isosceles");
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test("should classify a Scalene triangle", () => {
        expect(classifyTriangle(10, 12, 14)).toBe("Scalene");
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test("should return error for invalid inputs", () => {
        expect(classifyTriangle(0, 10, 10)).toBe(
            "Error: Input conditions C1, C2, or C3 failed.",
        );
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
        expect(classifyTriangle(1, 2, 3)).toBe("Not a Triangle");
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    // Test case 1: Equilateral triangle with sides of length 2
    it("should classify an equilateral triangle with sides of length 2", () => {
        const result = classifyTriangle(2, 2, 2);
        expect(result).toEqual("Equilateral");
    });

    // Test case 2: Equilateral triangle with sides of length 199
    it("should classify an equilateral triangle with sides of length 199", () => {
        const result = classifyTriangle(199, 199, 199);
        expect(result).toEqual("Equilateral");
    });

    // Test case 3: Isosceles triangle with sides of length 3, 3, and 4
    it("should classify an isosceles triangle with sides of length 3, 3, and 4", () => {
        const result = classifyTriangle(3, 3, 4);
        expect(result).toEqual("Isosceles");
    });

    // Test case 4: Isosceles triangle with sides of length 3, 4, and 3
    it("should classify an isosceles triangle with sides of length 3, 4, and 3", () => {
        const result = classifyTriangle(3, 4, 3);
        expect(result).toEqual("Isosceles");
    });

    // Test case 5: Scalene triangle with sides of length 6, 7, and 8
    it("should classify a scalene triangle with sides of length 6, 7, and 8", () => {
        const result = classifyTriangle(6, 7, 8);
        expect(result).toEqual("Scalene");
    });

    // Test case 6: Scalene triangle with sides of length 195, 196, and 197
    it("should classify a scalene triangle with sides of length 195, 196, and 197", () => {
        const result = classifyTriangle(195, 196, 197);
        expect(result).toEqual("Scalene");
    });

    // Test case 7: Not a Triangle with sides of length 1, 1, and 3
    it('should classify "Not a Triangle" with sides of length 1, 1, and 3', () => {
        const result = classifyTriangle(1, 1, 3);
        expect(result).toEqual("Not a Triangle");
    });

    // Test case 8: Not a Triangle with sides of length 5, 1, and 1
    it('should classify "Not a Triangle" with sides of length 5, 1, and 1', () => {
        const result = classifyTriangle(5, 1, 1);
        expect(result).toEqual("Not a Triangle");
    });

    // Test case 9: Not a Triangle with sides of length 1, 5, and 1
    it('should classify "Not a Triangle" with sides of length 1, 5, and 1', () => {
        const result = classifyTriangle(1, 5, 1);
        expect(result).toEqual("Not a Triangle");
    });

    // Test case 10: Not a Triangle with sides of length 1, 1, and 1
    it('should classify "Not a Triangle" with sides of length 1, 1, and 1', () => {
        const result = classifyTriangle(1, 1, 1);
        expect(result).toEqual("Not a Triangle");
    });

    // Test case 11: Equilateral triangle with sides of length 100
    it("should classify an equilateral triangle with sides of length 100", () => {
        const result = classifyTriangle(100, 100, 100);
        expect(result).toEqual("Equilateral");
    });

    // Test case 12: Isosceles triangle with sides of length 5, 5, and 3
    it("should classify an isosceles triangle with sides of length 5, 5, and 3", () => {
        const result = classifyTriangle(5, 5, 3);
        expect(result).toEqual("Isosceles");
    });

    // Test case 13: Scalene triangle with sides of length 10, 11, and 12
    it("should classify a scalene triangle with sides of length 10, 11, and 12", () => {
        const result = classifyTriangle(10, 11, 12);
        expect(result).toEqual("Scalene");
    });

    // Test case 14: Not a Triangle with sides of length 1, 2, and 3
    it('should classify "Not a Triangle" with sides of length 1, 2, and 3', () => {
        const result = classifyTriangle(1, 2, 3);
        expect(result).toEqual("Not a Triangle");
    });

    // Test case 15: Equilateral triangle with sides of length 200
    it("should classify an equilateral triangle with sides of length 200", () => {
        const result = classifyTriangle(200, 200, 200);
        expect(result).toEqual("Equilateral");
    });

    // Test case 16: Isosceles triangle with sides of length 2, 3, and 2
    it("should classify an isosceles triangle with sides of length 2, 3, and 2", () => {
        const result = classifyTriangle(2, 3, 2);
        expect(result).toEqual("Isosceles");
    });

    // Test case 17: Scalene triangle with sides of length 20, 21, and 22
    it("should classify a scalene triangle with sides of length 20, 21, and 22", () => {
        const result = classifyTriangle(20, 21, 22);
        expect(result).toEqual("Scalene");
    });

    // Test case 18: Not a Triangle with sides of length 1, 2, and 300
    it('should classify "Not a Triangle" with sides of length 1, 2, and 300', () => {
        const result = classifyTriangle(1, 2, 300);
        expect(result).toEqual("Not a Triangle");
    });

    // Test case 19: Not a Triangle with sides of length 3, 400, and 5
    it('should classify "Not a Triangle" with sides of length 3, 400, and 5', () => {
        const result = classifyTriangle(3, 400, 5);
        expect(result).toEqual("Not a Triangle");
    });

    // Test case 20: Not a Triangle with sides of length 500, 6, and 7
    it('should classify "Not a Triangle" with sides of length 500, 6, and 7', () => {
        const result = classifyTriangle(500, 6, 7);
        expect(result).toEqual("Not a Triangle");
    });
});
