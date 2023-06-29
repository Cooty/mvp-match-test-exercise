import { describe, expect, it } from "vitest";
import { getColors } from "./utils";
import { chartColors } from "./colors";

describe("Helpers for the chart", () => {
  describe("Function to map colors to labels", () => {
    it("Maps color values to labels of the chart from a predefined color pallette", () => {
      const colors = getColors(["Item #1", "Item #2", "Item #3"]);
      expect(colors[0]).toBe(chartColors.purple);
      expect(colors[1]).toBe(chartColors.orange);
      expect(colors[2]).toBe(chartColors.yellow);
    });

    it("Adds random colors if there are more labels then predefined colors in our pallette", () => {
      const colors = getColors([
        "Item #1",
        "Item #2",
        "Item #3",
        "Item #4",
        "Item #5",
        "Item #6",
      ]);
      expect(colors.length).toBe(6);
      expect(colors[0]).toBe(chartColors.purple);
      expect(colors[1]).toBe(chartColors.orange);
      expect(colors[2]).toBe(chartColors.yellow);
      expect(colors[3]).toBe(chartColors.grey);

      const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;
      expect(colors[4].match(hexColorRegex)).toBeTruthy();
      expect(colors[5].match(hexColorRegex)).toBeTruthy();
    });
  });
});
