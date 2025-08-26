/*
 * Методи масиву
 *
 * - join
 * - split (Метод рядка)
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

//~ Використання метода join()

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// const result = courses.join('/');

// console.log('courses:', courses);
// console.log('result:', result);

//~ Використання метода split()

// const phoneNumbers = '+380961111111,+380961111111,+380961111111,+380961111111';
// const phoneNumbersArr = phoneNumbers.split(',');

// console.log('phoneNumbers:', phoneNumbers);
// console.log('phoneNumbersArr:', phoneNumbersArr);

//~ Використання метода slice()

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// const coursesCopy = courses.slice(2, 4);

// console.log('courses:', courses);
// console.log('coursesCopy:', coursesCopy);

// courses[0] = 'PHP';

// console.log('courses:', courses);
// console.log('coursesCopy:', coursesCopy);

//~ Використання метода concat()

// const oldCourses = ['HTML', 'CSS'];
// const newCourses = ['JavaScript', 'React', 'NodeJS'];
// const allCourses = oldCourses.concat(newCourses, ['Hello', 'World', '!']);

// console.log('oldCourses:', oldCourses);
// console.log('newCourses:', newCourses);
// console.log('allCourses:', allCourses);

//~ Використання метода indexOf()

// const courses = ['HTML', 'CSS', 'HTML', 'JavaScript', 'React', 'NodeJS'];

// console.log('courses:', courses);

// const indexOfCourseJS = courses.indexOf('HTML');

// console.log('indexOfCourseJS:', indexOfCourseJS);

//~ Використання методів push()/pop() та unshift()/shift()

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// console.log('courses:', courses);

// courses.unshift('PHP', 'SASS');

// console.log('courses:', courses);

// courses.shift();
// courses.shift();

// console.log('courses:', courses);
