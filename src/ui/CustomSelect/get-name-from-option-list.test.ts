import { describe, it, expect } from "vitest";
import getNameFromOptionList from "./get-name-from-option-list";

describe("Gets name value associated with a given ID from a list of options", () => {
  it("Returns the value of the option with the given ID", () => {
    const options = [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" },
    ];

    expect(getNameFromOptionList("1", options)).toEqual("One");
    expect(getNameFromOptionList("2", options)).toEqual("Two");
    expect(getNameFromOptionList("3", options)).toEqual("Three");
  });
  it("Returns undefined if the ID is not found in the list of options", () => {
    const options = [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" },
    ];

    expect(getNameFromOptionList("200abc", options)).toBe(undefined);
  });
});
