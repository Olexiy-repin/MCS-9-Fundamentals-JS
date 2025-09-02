/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const courseHTML = ['HTML Fundamentals', 'Some description...', 10000, 4.5];

// const courseTitle = courseHTML[0];

const courseHTML = {
  title: 'HTML Fundamentals',
  description: 'Some description...',
  price: 10000,
  rating: 4.5,
  images: {
    big: 'https://my-site.com/big-html.png',
    medium: 'https://my-site.com/medium-html.png',
    small: 'https://my-site.com/small-html.png',
  },
};

console.log(courseHTML);

console.log(courseHTML.title);
console.log(courseHTML.rating);
console.log(courseHTML.test);

const key = 'rating';

console.log(courseHTML['description']);
console.log(courseHTML['pr' + 'ice']);
console.log(courseHTML[key]);

courseHTML.price = 8000;
courseHTML.onSale = true;

console.log(courseHTML);

console.log(courseHTML.images.small);
console.log(courseHTML['images']['small']);
