let arrays = [[1, 2, 3], [4, 5], [6]];

let flattened = arrays.reduce((flat, current) => flat.concat(current), []);
console.log(flattened);


