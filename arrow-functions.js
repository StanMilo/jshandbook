// this - different scope
// shorter syntax - small, inline, single-purpose

// function declaration
var sayHello = function() {
  console.log('Hello')
}
sayHello()

// arrow function
let hello = (title) => {
  console.log('Hello ' + title)
}
hello('from arrow function')

// arrow function
let helloShort = _ => console.log('Hello from inline arrow function') // It could bew in one line
helloShort()

// Less Code
let users = [
  {username: 'mark88', age:'19', gender:'M'},
  {username: 'johnAA', age:'28', gender:'M'},
  {username: 'lola88', age:'39', gender:'F'},
  {username: 'sara782', age:'29', gender:'F'},
  {username: 'maryyyy', age:'33', gender:'F'}
]
// Less Code
let countFemaleUsersOlderThen29 = users
  .filter(user => user.gender === 'F')
  .filter(user => user.age > 29 )
  .reduce(total => total + 1, 0 )

console.log(countFemaleUsersOlderThen29) // 2


/* In regular function we have to cary about scope when we pass it as callback */
function User(name) {
  this.name = name;
  setTimeout(this.hello, 100) // From function declaration scope:  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
  setTimeout(this.hello.bind(this), 200) // From function declaration scope:  User {name: "John"}
  setTimeout(_ => console.log('From arrow function scope: ', this), 300) // From arrow function scope:  User {name: "John"}
}
User.prototype = {

  hello: function() {
      console.log('From function declaration scope: ',this)
  }

}
new User('John')
