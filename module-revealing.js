/**
 *  TOO write what is Modile revealing pattern
 *
 */

const NumHandler = (numbers) => {

    let isInt = (value) => {
        return !isNaN(value) &&
            parseInt(Number(value)) == value;
    }

	numbers.forEach((value) => {
		if (!isInt(value)) {
        	throw `Parameter "${value}" is not a number!`
		}
	})

	let totalsCount = _ => {
		return numbers.reduce((sum, num) => {
			return sum + num
		}, 0)
	}

	let getSmallest = _ => Math.min.apply(Math, numbers)

    let getGreatest = _ => Math.max.apply(Math, numbers)


	return {
        totalsCount	: totalsCount,
        getSmallest	: getSmallest,
        getGreatest	: getGreatest
	}
}

let numbers = [55, 3, 15, 12, 33]
let num  = NumHandler(numbers)

console.log(numbers)
console.log("Total count is: " + num.totalsCount())
console.log("Smallest num is: " + num.getSmallest())
console.log("Greatest num is: " + num.getGreatest())


