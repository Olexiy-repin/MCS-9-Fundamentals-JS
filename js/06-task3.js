/*
TODO: Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
TODO: так щоб вона приймала об'єкт з параметрами будинку, включаючи довжини сторін будинку.
TODO: Функція повинна розрахувати та повернути периметр будинку.
 */

const calculateHousePerimeter = ({ sideA, sideB, sideC, sideD }) => {
  return sideA + sideB + sideC + sideD;
};

const houseSides = {
  sideA: 10,
  sideB: 15,
  sideC: 10,
  sideD: 15,
};

const perimeter = calculateHousePerimeter(houseSides);

console.log(`Периметр будинку: ${perimeter}`);
