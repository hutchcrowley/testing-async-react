export const asyncThing = function(callback) {
  return new Promise(resolve => {
    setTimeout(() => {
      callback();
      resolve(7);
    }, 1000);
  });
};
// export const makePerson = function(firstName, lastName) {
//   return {
//     id: uuid(),
//     fullName: `${firstName} ${lastName}`
//   };
// };

// export const executeIfEven = function(number, callback) {
//   if (number % 2 === 0) {
//     callback(number);
//   }
// };
