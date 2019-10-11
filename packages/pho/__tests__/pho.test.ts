import { getFoo } from "../src";

describe("@drewfle-scripts/pho", () => {
  it("foo", () => {
    expect(getFoo()).toBe("bar");
  });
});
