const addNumberToListImpure = (list) => {
  return [...list, Math.floor(Math.random() * 100)];
};

/** Add your code below */
const input = [1, 2, 3];

console.log(addNumberToListImpure(input));
console.log(addNumberToListImpure(input));
console.log(addNumberToListImpure(input));
console.log(addNumberToListImpure(input));
console.log(addNumberToListImpure(input));