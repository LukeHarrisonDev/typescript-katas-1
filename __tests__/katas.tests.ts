import { areValuesEqual } from "../katas-a1"

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