
var calculator = require("../example");

describe("multiplication", function () {
  it("should multiply 2 and 3", function () {
    var product = calculator.multiply(3, 3);
    expect(product).toBe(true);
  });
});
