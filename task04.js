const generateRandomArray = (n, m) => {
  return Array(Math.floor(Math.random() * 100))
    .fill()
    .map(() => Math.floor(Math.random() * (m - n)) + n)
    .filter(function (year) {
      return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    });
};

console.log(generateRandomArray(100, 5000));
console.log(generateRandomArray(1000, 2000));
