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
    
    _convertHumanToPetAge(humanAge) {
        const conversionRates = {
            dog: 7, 
            cat: 5, 
        };

        return conversionRates[this._type] ? humanAge * conversionRates[this._type] : humanAge;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length > 0) {
            this._name = value;
        } else {
            throw new Error('Name cannot be empty.');
        }
    }

    get type() {
        return this._type;
    }

    set type(value) {
        if (value.length > 0) {
            this._type = value;
        } else {
            throw new Error('Type cannot be empty.');
        }
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (Number.isInteger(value) && value >= 0) {
            this._age = this._convertHumanToPetAge(value);
        } else {
            throw new Error('Age must be a non-negative integer.');
        }
    }
}

export default Pet;