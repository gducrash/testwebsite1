import React from "react";

export function constructClass (arr: any[]) {
    // remove all empty strings or non-strings
    // then return the result as a string
    // with classes separated by space
    arr = arr.filter(f => f && typeof f == "string");
    return arr.join(" ");
}

export function isInView (elem: React.MutableRefObject<any>) {
    // returns true if the element is visible on screen 
    // in terms of y position
    const screenY = elem.current?.getBoundingClientRect().y ?? 0;
    return screenY > 0 && screenY < window.innerHeight;
}

export function mod (n: number, m: number) {
    // a modulo that works with negative numbers
    return ((n % m) + m) % m;
}

export function distanceFromZero (val: number, factor: number = 1) {
    // converts a coordinate system where 0 is left and 1 is right
    // to a system where 0 is center and 1 is either side
    return 1 - Math.abs(val) * 2 * factor;
}

export function formatCount (count: number) {
    // convert a number to a string 
    // with spaces separating every 3 characters
    let str = count.toFixed();
    let newStr = '';

    for (let i = str.length-1; i > 0; i-=3) {
        let hundreds = str[i-2] ?? "";
        let dozens   = str[i-1] ?? "";
        let ones     = str[i];
        newStr = hundreds + dozens + ones + " " + newStr;
    }

    return newStr;
}