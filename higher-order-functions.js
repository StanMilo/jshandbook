/*
	Higher order function is function that takes one or more functions as arguments
	filter, map, reduce, sort, reject ...
*/

const USERS_LIST = [
	{
		'userId'		: 1,
		'firstName' : 'John',
		'lastName'  : 'Smit',
		'gender'		: 'M',
		'age'				: 55
	},
	{
		'userId'		: 2,
		'firstName' : 'Mark',
		'lastName'  : 'Jones',
		'gender'		: 'M',
		'age'				: 27
	},
	{
		'userId'		: 3,
		'firstName' : 'Sandy',
		'lastName'  : 'Smit',
		'gender'		: 'F',
		'age'				: 23
	},
	{
		'userId'		: 4,
		'firstName' : 'Michael',
		'lastName'  : 'Smit',
		'gender'		: 'M',
		'age'				: 48
	},
	{
		'userId'		: 4,
		'firstName' : 'Lucy',
		'lastName'  : 'Grant',
		'gender'		: 'F',
		'age'				: 18
	}
]


const filterByAge = (users, age) => {
	return users.filter( user => user.age >= age ); // Higher order function that filter array by condition
}

const sortByAgeAsc = (users) => {
	return users.sort((a, b) => a.age - b.age)
}

const sortByAgeDesc = (users) => {
	return users.sort((a, b) => b.age - a.age)
}

const filterByGender = (users, gendersList) => {
	if (gendersList.length === 1) {
		return users.filter( user => user.gender == gendersList[0])
	}
	return users
}

const removeUser = (users, userId) => {
	return users.reject((user) => user.userId = userId)
}

const findById = (users, userId) => {
	return users.find((user) => user.userId = userId)
}

const expandUser = (users) => {
	return users.map((user) => {
		user.fullName = user.firstName + ' ' + user.lastName
		return user
	})
}

const countTotalUsersAge = (users) => {
	return users.reduce((sum, user) => {
		return sum + user.age
	},0)
}

let users = USERS_LIST
users = filterByAge(users, 25)
users = filterByGender(users, ['M', 'F'])
users = expandUser(users)
users = sortByAgeAsc(users)

console.log(users)
