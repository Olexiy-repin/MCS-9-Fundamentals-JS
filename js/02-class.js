/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

class User {
  #email;
  #tel;
  static userCounter = 0;

  constructor(firstName, lastName, age, email, tel) {
    // let this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.#email = email;
    this.#tel = tel;

    User.userCounter++;
    // return this;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getEmail() {
    return this.#email;
  }

  setEmail(newEmail) {
    if (User.isEmailValid(newEmail)) {
      this.#email = newEmail;
    }
  }

  get tel() {
    return this.#tel;
  }

  set tel(newTel) {
    this.#tel = newTel;
  }

  static isEmailValid(email) {
    return typeof email === 'string';
  }
}

const userTom = new User('Tom', 'Ford', 30, 'tom@gmail.com', '(960) 218-3792');

console.log(userTom);
console.log(userTom.getFullName());
console.log(userTom.getEmail());
userTom.setEmail('tom2@gmail.com');
console.log(userTom.getEmail());
console.log(userTom.tel);
userTom.tel = '(842) 411-3528';
console.log(userTom.tel);

const userTrevor = new User('Trevor', 'Nunez', 17, 'trevor@gmail.com', '(465) 281-9866');

console.log(userTrevor);
console.log(userTrevor.getFullName());
console.log(userTrevor.getEmail());
userTrevor.setEmail('trevor2@gmail.com');
console.log(userTrevor.getEmail());
console.log(userTrevor.tel);
userTrevor.tel = '(211) 518-5334';
console.log(userTrevor.tel);

console.dir(User);
console.log(User.userCounter);
