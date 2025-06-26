
import { merge } from "../src/index";

describe("merge function", () => {
  it("should merge three sorted arrays correctly", () => {
    const a = [1, 3, 5];
    const b = [6, 4, 2];
    const c = [7, 8, 9];

    const result = merge(a, b, c);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("should handle empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
  });

  it("should handle arrays with duplicates", () => {
    const a = [1, 3, 5];
    const b = [5, 3, 1];
    const c = [3, 5, 7];
    const result = merge(a, b, c);
    expect(result).toEqual([1, 1, 3, 3, 3, 5, 5, 5, 7]);
  });
});
