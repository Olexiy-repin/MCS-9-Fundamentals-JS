/*
 * Метод filter
 *
 * - Поелементно перебирає оригінальний массив
 * - Повертає новий масив (з елементами або порожній)
 * - Додає в масив, що повертається, елементи, які задовольняють умові коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */

//~ Повна версія
// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.filter((el, idx, arr) => {
//   return el > 10;
// });

// console.log('numbers: ', numbers);
// console.log('filteredNumbers: ', filteredNumbers);

//~ Скорочена версія
// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.filter(el => el > 10);

// console.log('numbers: ', numbers);
// console.log('filteredNumbers: ', filteredNumbers);

/*
 ~ ---------------------------
 */

// const allCars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// console.table(allCars);

/*
TODO: Нехай функція filterByPrice(cars, threshold) повертає масив автомобілів ціна яких менша ніж
TODO: значення параметра threshold.
 */

//~ Повна версія
// const filterByPrice = (cars, threshold) => {
//   return cars.filter((el, idx, arr) => {
//     return el.price <= threshold;
//   });
// };

// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

//~ Скорочена версія
// const filterByPrice = (cars, threshold) => cars.filter(car => car.price <= threshold);

// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

/*
TODO: Нехай функція getCarsWithDiscount повертає масив автомобілів
TODO: властивість onSale яких true.
 */

//~ Повна версія
// const getCarsWithDiscount = cars => {
//   return cars.filter((el, idx, arr) => {
//     return el.onSale;
//   });
// };

// console.table(getCarsWithDiscount(allCars));

//~ Скорочена версія
// const getCarsWithDiscount = cars => cars.filter(car => car.onSale);

// console.table(getCarsWithDiscount(allCars));

/*
TODO: Нехай функція getCarsWithType(cars, type) повертає масив автомобілів тип яких збігається
TODO: зі значенням параметра type.
 */

//~ Повна версія
// const getCarsWithType = (cars, type) => {
//   return cars.filter((el, idx, arr) => {
//     return el.type === type;
//   });
// };

// console.table(getCarsWithType(allCars, 'truck'));
// console.table(getCarsWithType(allCars, 'sedan'));

//~ Скорочена версія
// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(allCars, 'truck'));
// console.table(getCarsWithType(allCars, 'sedan'));
