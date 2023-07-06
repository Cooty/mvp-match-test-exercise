import { describe, test, expect } from "vitest";
import formatMoney from "./format-money";

describe("A function to format money", () => {
  test("Format amount with default currency", () => {
    expect(formatMoney(2493.1)).equal("2,493.10 USD");
  });

  test("Format a number with multiple commas", () => {
    expect(formatMoney(100000000000.0)).equal("100,000,000,000.00 USD");
  });

  test("Format a number with no commas needed", () => {
    expect(formatMoney(122)).equal("122.00 USD");
  });

  test("Format a number with a different currency", () => {
    expect(formatMoney(71876, "HUF")).equal("71,876.00 HUF");
  });

  test("Format a number with a different currency, but the currency code is supplied in lowercase", () => {
    expect(formatMoney(10, "huf")).equal("10.00 HUF");
  });
});
