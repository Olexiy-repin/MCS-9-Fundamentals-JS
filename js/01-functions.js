/*
 TODO: Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 TODO: маси тіла людини. Для цього необхідно розділити вагу на квадрат висоти.
 TODO:
 TODO: Вага та висота будуть спеціально передані як рядки.
 TODO:
 TODO: Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {
  weight = Number(weight);
  height = Number(height);

  const result = weight / height ** 2;

  return Number(result.toFixed(1));
}

const bmi = calcBMI('88.3', '1.75');

console.log(bmi); // 28.8
