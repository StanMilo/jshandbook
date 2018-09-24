
const firstPromise = () => {
	let successMsg = 'Num is odd. Success'
	let errorMsg = 'Num is not Odd. Faild'
	// TODO - add more logic
	return new Promise((resolve, reject) => {
  	  let wait = setTimeout(() => {

	  	let time = new Date().getTime()
	  	time % 2
	  		? resolve(successMsg)
	  		: reject(errorMsg);	 
	  }, 500)
	})
}

firstPromise()
	.then((res) => {
		console.log('Success', res)	
	})
	.catch((res) => {
		console.log('Error', res)	
	})


/******* Promise chaning ***********/

const methodOne = (num) => {
    console.log(num)
    return num * 2;
}

const methodTwo = (num) => {
    return new Promise(function(resolve, reject) {
        console.log(num)
        num = num * 3
        setTimeout(() => resolve(num), 1000);

    })
}

const methodThree = (num) => {
    console.log(num)
    return num * 4;
}

const promiseChaning = (num) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(num), 1000);
    })
}

promiseChaning(5)
	.then(methodOne)
	.then(methodTwo)
	.then(methodThree)
	.then((res) => {
		console.log('Total result is: ' + res)
	})
	.catch((res) => {
		console.log('Error !!!')
	})
