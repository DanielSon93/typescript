/**
 * Let's make a calculator 🧮
 */

type Calc = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(calc: Calc, x: number, y: number): number {
  switch (calc) {
    case 'add':
      return x + y;
    case 'substract':
      return x - y;
    case 'multiply':
      return x * y;
    case 'divide':
      return x / y;
    case 'remainder':
      return x % y;
    default:
      throw new Error("Wrong Calc Type");
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
