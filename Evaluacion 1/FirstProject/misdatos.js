import React from "react";

export function Mapeo() {
    const numbers = [1, 2, 3, 4, 5];
    console.log(numbers);
    const doubled = numbers.map((number) => number * 2);
    return doubled;
}