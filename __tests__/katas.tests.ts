import { areValuesEqual, convertToCamelCase } from "../katas-a1"

describe("areValuesEqual", () => {
    test("when passed 2 values that are not identical, returns false", () => {
        expect(areValuesEqual(1, 2)).toBe(false)
    })
    test("when passed 2 values that are identical, returns true", () => {
        expect(areValuesEqual(2, 2)).toBe(true)
    })
    test("when passed 2 values of different data types, returns false", () => {
        expect(areValuesEqual("Hello", 2)).toBe(false)
    })
})

describe("convertToCamelCase", () => {
    test("when passed a single word, lowercase string, returns that string", () => {
        expect(convertToCamelCase("hello")).toBe("hello")
    })
    test("when passed a single word, uppercase string, return the string in lowercase", () => {
        expect(convertToCamelCase("HELLO")).toBe("hello")
    })
    test("when passed two words of lowercase, returns them together with the second words first letter capitalised", () => {
        expect(convertToCamelCase("hello world")).toBe("helloWorld")
    })
    test("when passed two words of varying case, returns them together with only the second words first letter capitalised", () => {
        expect(convertToCamelCase("hElLo wOrLd")).toBe("helloWorld")
    })
    test("when passed more than two words of varying case, returns them as camelCase", () => {
        expect(convertToCamelCase("HeLlO WoRld i LoVe codinG")).toBe("helloWorldILoveCoding")
    })
})