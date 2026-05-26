import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("Shuffle Function", () => {
  it("should shuffle the indexes of an array", () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffledArray = shuffle([...originalArray]);

    expect(shuffledArray).to.have.members(originalArray);
    expect(shuffledArray).to.have.lengthOf(originalArray.length);
  });

  // Additional test for edge case
  it("should handle single element array", () => {
    const result = shuffle([42]);
    expect(result).to.be.eql([42]);
  });
});
