const expression1 = 100 % 50; // 0
const expression2 = 100 / 50; // 2
const expression3 = expression1 < expression2; // true
const expression4 = expression3 && 300 + 5 === 305; // true
const expression5 = !expression4; false

console.log(expression5);

// combined expression

const combined = !(((100 % 50) < (100 / 50)) && 300 + 5 === 305);
console.log(combined);