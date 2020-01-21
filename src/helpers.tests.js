import React from "react";

import renderer from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import wait from "./utils/wait";

//  Library that generates a new, random ID for a given element each time it's enclosing function is called.
import uuid from "uuid";

import * as help from "./helpers";

jest.useFakeTimers();

jest.mock("uuid", () => () => "123");

describe("asyncThing function", () => {
  it("eventually resolves to 7", () => {
    const promise = help.asyncThing(Function.prototype);

    jest.runAllTimers();

    //  save the promise to a variable
    const resolvedValue = null;
    const expected = 7;
    help.asyncThing(Function.prototype).then(res => {
      expect(resolvedValue).toBe(expected);
    });
  });
});

it("eventually calls the callback", () => {
  const spy = jest.fn();
  //  Have the spy report
  expect(spy).not.toBeCalled(); // Sanity test
  help.asyncThing(Function.prototype).then(res => {
    // wait for the asyncThing to be called
    expect(spy).toBeCalled();
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
