/*
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'PHP', 'SASS'];

console.log('courses:', courses);

const firstCourse = courses[0];

console.log('firstCourse:', firstCourse);

courses[0] = 'NodeJs';

console.log('courses:', courses);

const lastCourse = courses[courses.length - 1];

console.log('lastCourse:', lastCourse);
