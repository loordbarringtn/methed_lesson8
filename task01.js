const generateRandomArray = (number) => {
    return Array(number)
      .fill()
      .map(() => Math.round(Math.random() * 100));
  };
  
  console.log(generateRandomArray(Math.floor(Math.random() * 100)));
  console.log(generateRandomArray(Math.floor(Math.random() * 100)));
  console.log(generateRandomArray(Math.floor(Math.random() * 100)));
  