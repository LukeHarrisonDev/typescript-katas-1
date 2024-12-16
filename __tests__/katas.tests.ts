import { areValuesEqual } from "../katas-a1"

describe("areValuesEqual", () => {
    test("when passed 2 values that are not identical, returns false", () => {
        expect(areValuesEqual(1, 2)).toBe(false)
    })
})