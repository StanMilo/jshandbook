/**
 *
 * TODO - what is call, apply, bind
 *
 */

var user = {
	firstName	: "Jonh",
	lastName	: "Smith",

	fullName: function () {
		console.log(this.firstName + ' ' + this.lastName)
    },

	showFullNameWithDelay: function () {
		setTimeout(this.fullName.bind(this), 1000) // bind
    }
};

var greeting = function(to, question){
	return `Welcome ${this.firstName} to ${to}. ${question}`
};

var resCall = greeting.call(user, "JS World", "How are you?") // call
console.log(resCall);

var args = ["JS World", "How are you?"]
var resApply = greeting.apply(user, args) // apply
console.log(resApply);

user.showFullNameWithDelay()
