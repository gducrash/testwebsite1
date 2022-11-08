export function constructClass (arr: any[]) {
    // remove all empty strings or non-strings
    // then return the result as a string
    // with classes separated by space
    arr = arr.filter(f => f && typeof f == "string");
    return arr.join(" ");
}