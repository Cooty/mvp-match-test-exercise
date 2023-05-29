import { describe, it, expect } from "vitest";
import getISODateString from "./get-iso-date-string";

describe("getISODateString", () => {
  it("returns the ISO date string without time", () => {
    const date1 = new Date("2023-05-28T10:15:30Z");
    expect(getISODateString(date1)).toBe("2023-05-28");

    const date2 = new Date("2022-12-01T14:30:45Z");
    expect(getISODateString(date2)).toBe("2022-12-01");

    const date3 = new Date("2021-02-09T08:45:00Z");
    expect(getISODateString(date3)).toBe("2021-02-09");

    const date4 = new Date("2020-10-15T16:20:10Z");
    expect(getISODateString(date4)).toBe("2020-10-15");
  });
});
