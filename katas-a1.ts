export function areValuesEqual(value1: any, value2: any): boolean {
    return value1 === value2
}

export function convertToCamelCase(string: string): string {

    const stringAsArray = string.toLowerCase().split(" ")

    if (stringAsArray.length === 1) {
        return stringAsArray[0]
    }

    const arrayWithCorrectCasing = [stringAsArray[0]]
    
    for (let i = 1; i < stringAsArray.length; i++) {
        arrayWithCorrectCasing.push(stringAsArray[i][0].toUpperCase() + stringAsArray[i].slice(1))
    }
    
    return arrayWithCorrectCasing.join("")
}