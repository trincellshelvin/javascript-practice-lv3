// TODO: Create the Pet class with private properties: name, type, and age
// Use getters and setters to access and validate the properties

// Example:
// class Pet {
//    constructor(name, type, age) {
//      this._name = name;
//      this._type = type;
//      this._age = age;
//    }
// 
//    // Create getter and setter for each property here
//    // Bonus: automatically convert human ages to pet ages when setting.
// }
class Pet {
    constructor(name, type, age) {
        this._name = name;
        this._type = type;
        this._age = this._convertHumanToPetAge(age);
    }

    // Convert human age to pet age based on type
    _convertHumanToPetAge(humanAge) {
        const conversionRates = {
            dog: 7, // 1 human year is approximately 7 dog years
            cat: 5, // 1 human year is approximately 5 cat years
            // Add more types and their conversion rates if needed
        };

        return conversionRates[this._type] ? humanAge * conversionRates[this._type] : humanAge;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name with validation
    set name(value) {
        if (value.length > 0) {
            this._name = value;
        } else {
            throw new Error('Name cannot be empty.');
        }
    }

    // Getter for type
    get type() {
        return this._type;
    }

    // Setter for type with validation
    set type(value) {
        if (value.length > 0) {
            this._type = value;
        } else {
            throw new Error('Type cannot be empty.');
        }
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Setter for age with validation
    set age(value) {
        if (Number.isInteger(value) && value >= 0) {
            this._age = this._convertHumanToPetAge(value);
        } else {
            throw new Error('Age must be a non-negative integer.');
        }
    }
}

export default Pet;
