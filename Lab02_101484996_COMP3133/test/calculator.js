const { expect } = require("chai");
const Arithmetic = require("../Arithmetic");

describe("Arithmetic Test Cases", function () {

  // square
  it("square(5) expected result 25 PASS", function () {
    expect(Arithmetic.square(5)).to.equal(25);
  });

  it("square(5) expected result 20 FAIL", function () {
    expect(Arithmetic.square(5)).to.not.equal(20);
  });

  // percentage
  it("percentage(10, 200) expected result 20 PASS", function () {
    expect(Arithmetic.percentage(10, 200)).to.equal(20);
  });

  it("percentage(10, 200) expected result 25 FAIL", function () {
    expect(Arithmetic.percentage(10, 200)).to.not.equal(25);
  });

});
