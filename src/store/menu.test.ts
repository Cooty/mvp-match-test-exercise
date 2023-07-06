import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useMenu } from ".";

describe("Hook to use the state slice corresponding to the side menu", () => {
  it("Can set the state of the menu", () => {
    const isOpened = renderHook(() => useMenu((state) => state.isOpened));
    expect(isOpened).toBeTruthy();
  });
});
