import { makePerson } from "./helpers";

describe("asyncThing function", () => {
  it("eventually resolves to 7", () => {
    help.asyncThing(Function.prototype).then(res => {});
  });
  it("eventually calls the callback", () => {
    const spy = jest.fn();
    expect(spy).not.toBeCalled(); // Sanity test
    help.asyncThing(Function.prototype).then(res => {
      expect(spy).toBeCalled(); // Have the spy report
    }); // wait for the asyncThing to be called
  });
});

describe("helpers module", () => {
  describe("sum function", () => {});
});

describe("makePerson function", () => {
  it("can create a person from firstName and lastName", () => {
    const expected = { id: "123", fullName: "John Smith" };
    const actual = help.makePerson("John", "Smith");
    expect(actual).toEqual(expected);
  });
});
