class Animal {

  getSound () {
    return `${this.race} says '${this.sound}'!`
  }

}

class Dog extends Animal {

  constructor () {
    super();
    this.race  = 'Dog'
    this.sound = 'Woof'
  }

}

class Cat extends Animal {

  constructor () {
    super();
    this.race  = 'Cat'
    this.sound = 'Meow'
  }
  
}

console.log(new Dog().getSound())
console.log(new Cat().getSound())
