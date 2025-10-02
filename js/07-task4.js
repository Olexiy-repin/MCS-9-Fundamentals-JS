/*
TODO: Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт 
TODO: із властивістю fullName, замість firstName та lastName.
*/

const transformUsername = ({ firstName, lastName, ...updatedUser }) => {
  updatedUser.fullName = `${firstName} ${lastName}`;

  return updatedUser;
};

console.log(
  transformUsername({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  })
);

console.log(
  transformUsername({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  })
);
