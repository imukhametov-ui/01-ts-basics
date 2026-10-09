function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement<number>([10, 20, 30]);

const firstString = getFirstElement<string>([
  "React",
  "TypeScript",
  "JavaScript",
]);

const firstBoolean = getFirstElement<boolean>([true, false, true]);

console.log(firstNumber);
console.log(firstString);
console.log(firstBoolean);
