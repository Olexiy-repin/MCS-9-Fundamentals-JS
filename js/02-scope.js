/*
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

// const firstName = 'Leah';

if (true) {
  if (true) {
    // console.log(firstName);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i < 20; i++) {
  console.log(i);
}

const fn1 = function (firstName) {
  console.log(`Welcome ${firstName}`);
};

const fn2 = function (firstName) {
  console.log(firstName);
};

fn1('Oleksii');
fn2('Marc');
