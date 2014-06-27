// beforeEach, afterEach
describe("Setup and tear down", function() {
  a = 2;

  beforeEach(function() {
    a--;               // change values from the parent scope
    this.foo = "bar";  // use `this` to share values through the parent scope
  });
  afterEach(function() {
    a = 2;
  });

  it("to change your values before testing", function() {
    expect(a).toEqual(1);
    expect(this.foo).toMatch("bar");
  });
});


// disable suite temporarily, marking them as pending
xdescribe("A suite is just a function", function() {
  var a;

  xit("and so is a spec", function() {
    a = true;

    expect(a).toBe(true); // toBe uses ===
  });
});

describe("A suite will be marked as pending (and does not execute)", function() {
  it("if there is no function associated");

  it("if the spec contains the pending() function", {
    pending();
  });
});
