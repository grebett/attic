// basic Jasmine suite (i.e. a set of tests)
describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true); // toBe uses ===
  });
});

// Jasmine suite can be more complex
describe("A suite can take more than one spec. It", function() {
  var a, b;

  it("can have a negative case", function() {
    expect(false).not.toBe(true);
  });

  it("can take more than one expect", function() {
    a = true;
    b = false;

    expect(a).toBe(true);
    expect(b).toBe(false);
  });
});
