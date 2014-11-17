
var calculator = require("../example");

describe("multiplication", function () {
  it("should multiply 2 and 3", function () {
    var product = calculator.multiply("clochette", "pierre");
    expect(product).toBe("je t'aime");
  });
});
