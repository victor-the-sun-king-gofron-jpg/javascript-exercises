function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	//array.reduce(index => )
	/*var sum = 0;
	for(var i = 0; i < array.length; i++){
		if(array[i] === Number){
			sum += array[i];
		}
	}*/

	const sum = array.reduce(function(sum, order) {
		return sum + order;
	}, 0);
	return sum;
}

function multiply (array) {
	//return (a * b);
	const multiply = array.reduce(function(multiply, order){
		return multiply * order;
	});
	return multiply;
}

function power(a, n) {
	//return a;
	var power = 1;
	for(var i = 1; i <=n; i++){
		power *= a;
	}
	return power;
}

function factorial(number) {	
	var currentValue = 1;
	var index = number;
	while(index !== 0){
		currentValue *= (index);
		index -= 1;
	}
	return currentValue;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}