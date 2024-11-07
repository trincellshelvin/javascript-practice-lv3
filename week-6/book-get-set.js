// TODO: Create the Book class with private properties: title, author, and publicationYear
// Use getters and setters to access and validate the properties

// Example:
// class Book {
//    constructor(title, author, publicationYear) {
//      this._title = title;
//      this._author = author;
//      this._publicationYear = publicationYear;
//    }
//
//    // Create getter and setter for each property here
// }

class Book {
    constructor(title, author, publicationYear) {
        this._title = title;
        this._author = author;
        this._publicationYear = publicationYear;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (value.length > 0) {
            this._title = value;
        } else {
            throw new Error('Title cannot be empty.');
        }
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (value.length > 0) {
            this._author = value;
        } else {
            throw new Error('Author cannot be empty.');
        }
    }

    get publicationYear() {
        return this._publicationYear;
    }

    set publicationYear(value) {
        if (Number.isInteger(value) && value > 0) {
            this._publicationYear = value;
        } else {
            throw new Error('Publication year must be a positive integer.');
        }
    }
}

export default Book;