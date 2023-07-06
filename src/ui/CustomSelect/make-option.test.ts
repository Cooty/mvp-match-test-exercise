import { describe, it, expect } from "vitest";
import { makeOption } from ".";

describe("Makes an option object", () => {
  it("Returns an object that can be used as an option in the dropdown", () => {
    const user = {
      _id: "123abc",
      name: "Lemmy",
      role: "ADMIN",
    };

    const userOption = makeOption(user, "_id", "name");
    expect(userOption.value).toBe("123abc");
    expect(userOption.label).toBe("Lemmy");
  });
});
