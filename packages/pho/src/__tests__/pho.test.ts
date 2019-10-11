import { getFoo } from "..";

describe("@drewfle-scripts/pho", () => {
  it("foo", () => {
    expect(getFoo()).toBe("bar");
  });
});
