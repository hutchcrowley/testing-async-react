const wait = seconds => {
  return new Promise(res => {
    //   setTimeout function takes two parameters. First, a callback function, and second, a number of units of time to wait before running the callback funcion.
    setTimeout(() => {
      res("hurray");
      //   After 1000 ms, run the callback function. In this case, the res of the promise should be a string that says 'hurray'.
    }, seconds * 1000);
  });
};

export default wait;
