let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
let number = `[${array.slice(0, 3).join("")}] (${array
  .slice(4, 7)
  .join("")}-${array.slice(8, 11).join("")})`;

console.log(number);
