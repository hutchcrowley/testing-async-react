import uuid from "uuid";

export const asyncThing = function(callback) {
  return new Promise(resolve => {
    // Don't forget to return
    setTimeout(() => {
      callback(); //need a spy
      resolve(7);
    }, 1000);
  });
};

exports.makePerson = function(firstName, lastName) {
  return {
    id: uuid(),
    fullName: `${firstName} ${lastName}`
  };
};
