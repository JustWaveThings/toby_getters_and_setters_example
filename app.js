/* class Thermostat {
	constructor(fahrenheit) {
		this.fahrenheit = fahrenheit;
	}
	get temperature() {
		return (5 / 9) * (this.fahrenheit - 32);
	}
	set temperature(tempInC) {
		this.fahrenheit = (tempInC * 9) / 5 + 32;
	}
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos.temperature); // 24.44 in Celsius
thermos.temperature = 26;
console.log(thermos.temperature); // 26 in Celsius
 */

// thermometer with a closure instead

const Thermostat = (fahrenheit) => {
	// here, we have the variable fahrenheit.
	//  completely hidden from the outside world.

	// we'll define those same getters and setters
	// but note we access the variable, not a property
	return {
		get temperature() {
			return (5 / 9) * (fahrenheit - 32);
		},
		set temperature(tempInC) {
			fahrenheit = (tempInC * 9) / 5 + 32;
		},
	};
};

// note this: we aren't using Thermometer as an
//  object constructor, simply as an executed function.
const thermos = Thermostat(76);

// and from here on, it works exactly the same!
console.log(thermos.temperature); // 24.44 in Celsius
thermos.temperature = 26;
console.log(thermos.temperature); // 26 in Celsius
