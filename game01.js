function guessNumber() {
  const random = Math.floor(Math.random() * 100) + 1;
  let answer = parseInt(
    prompt(
      "Сгенерировано число в диапазоне от 1 до 100, пожалуйста введите Ваш вариант:"
    )
  );

  while (answer !== random) {
    if (!answer) {
      alert("Игра закончена!");
      break;
    }

    if (answer < random) {
      answer = prompt("Вы ввели число меньше загаданного");
      continue;
    }

    if (answer > random) {
      answer = prompt("Вы ввели число больше загаданного");
      continue;
    }

    if (Number.isNaN(answer)) {
      answer = prompt("Введите число");
    }
  }

  if (answer === random) {
    prompt(`Вы ввели правильный номер: ${random}`);
  }
}

guessNumber();
