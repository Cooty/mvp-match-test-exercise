import { describe, it, expect } from "vitest";
import getInitials from "./get-initials";

describe("getInitials", () => {
  it("returns the initials for first name and last name", () => {
    expect(getInitials("John", "Doe")).toBe("JD");
    expect(getInitials("Jane", "Smith")).toBe("JS");
  });

  it("returns an empty string if either first name or last name is empty", () => {
    expect(getInitials("", "Doe")).toBe("");
    expect(getInitials("John", "")).toBe("");
    expect(getInitials("", "")).toBe("");
  });

  it("returns the initial even if first name or last name has multiple words", () => {
    expect(getInitials("John William", "Doe")).toBe("JD");
    expect(getInitials("Jane", "Smith Johnson")).toBe("JS");
  });

  it("returns the initial if first name or last name has leading or trailing spaces", () => {
    expect(getInitials(" John ", "Doe")).toBe("JD");
    expect(getInitials("  Jane  ", "Smith")).toBe("JS");
  });
});
