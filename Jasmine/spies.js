// spies

// considering the person function below :
var Person = function() {};

Person.prototype.helloSomeone = function(toGreet) {
  return this.sayHello() + " " + toGreet;
};

Person.prototype.sayHello = function() {
  return "Hello";
};

// adding a simple spy
describe("Person", function() {
  it("calls the sayHello() function", function() {
    var fakePerson = new Person();
    spyOn(fakePerson, "sayHello");
    fakePerson.helloSomeone("world");
    expect(fakePerson.sayHello).toHaveBeenCalled();
  });
});

// check a specific argument
describe("Person", function() {
  it("greets the world", function() {
    var fakePerson = new Person();
    spyOn(fakePerson, "helloSomeone");
    fakePerson.helloSomeone("world");
    expect(fakePerson.helloSomeone).toHaveBeenCalledWith("world");
  });
});

// use createSpy to replace the function tested by a dummy one
describe("Person", function() {
  it("says hello", function() {
    var fakePerson = new Person();

    fakePerson.sayHello = jasmine.createSpy("Say-hello spy")
    // can add fake return values
    .andReturnValue("Good bye")
    // or fake callbacks
    .andCallFake(function() {
      console.log("hello");
    });

    fakePerson.helloSomeone("world");
    expect(fakePerson.sayHello).toHaveBeenCalled();
  });
});
