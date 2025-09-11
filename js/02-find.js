/*
 * Метод find
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 */

//~ Повна версія
// const numbers = [5, 15, 10, 20, 25];
// const firstEvenNumber = numbers.find((el, idx, arr) => {
//   return el % 2 === 0;
// });

// console.log('numbers: ', numbers);
// console.log('firstEvenNumber: ', firstEvenNumber);

//~ Скорочена версія
// const numbers = [5, 15, 10, 20, 25];
// const firstEvenNumber = numbers.find(num => num % 2 === 0);

// console.log('numbers: ', numbers);
// console.log('firstEvenNumber: ', firstEvenNumber);

/*
 ~ -----------------------------
 */
// const allCars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
//   { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
//   { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
//   { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
//   { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
// ];

// console.table(allCars);

/*
TODO: Шукаємо автомобіль за моделлю
 */

//~ Повна версія
// const getCarByModel = (cars, model) => {
//   const car = cars.find((el, idx, arr) => {
//     return el.model === model;
//   });

//   return car || `Автомобіль з моделью ${model} не знайдено!`;
// };

// console.log(getCarByModel(allCars, 'F-150'));
// console.log(getCarByModel(allCars, 'CX-9'));
// console.log(getCarByModel(allCars, 'Cayenne'));

//~ Скорочена версія
// const getCarByModel = (cars, model) => {
//   const searchedCar = cars.find(car => car.model === model);

//   return searchedCar || `Автомобіль з моделью ${model} не знайдено!`;
// };

// console.log(getCarByModel(allCars, 'F-150'));
// console.log(getCarByModel(allCars, 'CX-9'));
// console.log(getCarByModel(allCars, 'Cayenne'));
