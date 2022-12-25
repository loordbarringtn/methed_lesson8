const generateRandomArray = (number, n, m) => {
  return Array(number)
    .fill()
    .map(() => Math.floor(Math.random() * (m - n)) + n);
};

console.log(generateRandomArray(Math.floor(Math.random() * 100), -3, 50));
console.log(generateRandomArray(Math.floor(Math.random() * 100), 0, 100));
console.log(generateRandomArray(Math.floor(Math.random() * 100), 5, 205));
