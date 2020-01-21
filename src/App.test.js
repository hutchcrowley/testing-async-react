import React from "react";
// import renderer from "react-test-renderer";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

jest.useFakeTimers();

test("Render the heading", () => {
  // Render the app into an in-memory DOM so that we can test against it
  const wrapper = rtl.render(<App />);

  // The element is now rendered in the virtual DOM, so we must get it with a query
  // The regexp /Testing React Components/i simply returns the string irrespective of case (upper or lower)
  const element = wrapper.getByText(/Testing React Components/i);

  //  test will fail if element isn't 'visible' (rendered)
  expect(element).toBeVisibile();
});
