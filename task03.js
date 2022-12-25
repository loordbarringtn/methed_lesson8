const generateRandomArray = (number, n, m, evenOrNot) => {
  if (evenOrNot === "even") {
    return Array(number)
      .fill()
      .map(() => Math.floor(Math.random() * (m - n)) + n)
      .filter(function (number) {
        return number % 2 === 0 || number === 0;
      });
  } else if (evenOrNot === "odd") {
    return Array(number)
      .fill()
      .map(() => Math.floor(Math.random() * (m - n)) + n)
      .filter(function (number) {
        return number % 2 === 1;
      });
  }
};

console.log(
  generateRandomArray(Math.floor(Math.random() * 100), 0, 100, "even")
);
console.log(
  generateRandomArray(Math.floor(Math.random() * 100), 0, 100, "odd")
);
console.log(
  generateRandomArray(Math.floor(Math.random() * 100), 0, 100, "even")
);
console.log(
  generateRandomArray(Math.floor(Math.random() * 100), 0, 100, "odd")
);
