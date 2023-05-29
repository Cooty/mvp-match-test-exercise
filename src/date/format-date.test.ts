import { it, describe, expect } from "vitest";
import formatDate from "./format-date";

describe("formatDate", () => {
  it("formats the date correctly", () => {
    expect(formatDate("2023-05-28")).toBe("28/05/2023");
    expect(formatDate("2022-12-01")).toBe("01/12/2022");
    expect(formatDate("2021-02-09")).toBe("09/02/2021");
    expect(formatDate("2020-10-15")).toBe("15/10/2020");
  });
});
