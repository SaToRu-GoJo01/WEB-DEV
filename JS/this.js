var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());


console.log(this);

var person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this;
    }
};

console.log(person.myFunction().firstName);


// Explicit Function Binding
// The call() and apply() methods are predefined JavaScript methods.
// They can both be used to call an object method with another object as argument.
var person1 = {
    firstName: "John",
    lastName: "Doe",
}

var person2 = {
    myFunction : function() {
        return this.firstName + " " + this.lastName;
    }
}

person2.myFunction.call(person1);