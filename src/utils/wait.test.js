import wait from "./wait";

test("wait for promise to resolve", () => {
  // Calls the wait function from wait.js
  wait(3).then(res => {
    expect(res).toBe("hurray");
  });
});
