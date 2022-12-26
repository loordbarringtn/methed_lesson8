function guessNumber() {
    const random = Math.floor(Math.random() * 100) + 1;
    let gameIsOver = false;

    while (!gameIsOver) {
        let answer = parseInt(
            prompt(
              `Сгенерировано число в диапазоне от 1 до 100, пожалуйста введите Ваш вариант: ${random}`
            )
          );

      if (!answer) {
        alert("Игра закончена!");
        break;
      }
  
      if (answer < random) {
        alert("Вы ввели число меньше загаданного");
        continue;
      }
  
      if (answer > random) {
        alert("Вы ввели число больше загаданного");
        continue;
      }
  
      if (Number.isNaN(answer)) {
        alert("Введите число");
      }

      if (answer === random) {
        alert(`Вы ввели правильный номер: ${random}`);
        gameIsOver = true;
      }
    }
  }
  
  guessNumber();