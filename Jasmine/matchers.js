// Jasmine provides a lot of different matchers :
describe("Beyond toBe, a full set of matchers", function() {
  var a, b, c, message;

  it("can compare values, even objects", function() {
    a = {
      first: 12,
      second: 13
    };
    b = {
      first: 12,
      second: 13
    };

    expect(a).toEqual(b);
  });

  it("can also check inequality", function() {
    a = 2;
    b = -1;
    c = 3.14;
    var pi = 3.1415926;

    expect(a).toBeGreaterThan(b);
    expect(b).toBeLessThan(0);
    expect(pi).toBeCloseTo(c, 2);
  });

  it("can match regex", function() {
    message = "a man enter in a bar and...";

    expect(message).toMatch(/bar/);
    expect(message).not.toMatch(/foo/);
  });

  it("can check if a variable is undefined, null, truthy or falsy", function() {
    a = {
      foo: bar,
      baz: null
    };

    expect(a.foo).toBeDefined();
    expect(a.bar).toBeUndefined();
    expect(a.baz).toBeNull();
    expect(a).toBeTruthy();
    expect(b).toBeFalsy();
  });

  it("can check if a value exists in a set of values", function() {
    a = ["foo", "bar", "qux"];

    expect(a).toContain("baz");
  });

  it("can test if a function throws an exception", function() {
    var foo = function() {
      return 1 + 2;
    };
    var bar = function() {
      return a + 1;
    };

    expect(foo).not.toThrow();
    expect(bar).toThrow();
  });
});
