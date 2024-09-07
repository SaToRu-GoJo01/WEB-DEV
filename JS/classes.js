{
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
}

var obj = new Car("Alto","2010");
console.log(obj.name);
}



class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
}

var myCar = new Car("Ford",2014);
console.log(myCar.age());