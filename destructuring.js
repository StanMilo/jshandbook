/*
	TODO - What is Desctructurin
*/

let user = {
	firstName	: 'John',
	lastName	: 'Smith',
	age			: 26 
}

const showFullName = ({firstName, lastName}) => {
	return firstName + ' ' + lastName
}

console.log(showFullName(user)) // John Smith
