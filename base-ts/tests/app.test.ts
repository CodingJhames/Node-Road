describe("Test in the App File", () => {
  test("sould be true", () => {
    // 1. Arrange
    const numOne = 10;
    const numTwo = 20;

    // 2. Act
    const result = numOne + numTwo;

    // 3. Assert
    expect(result).toBe(30);
  });
});
