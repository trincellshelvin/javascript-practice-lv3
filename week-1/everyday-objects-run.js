import { Car, Phone, Book, Laptop, Backpack } from "everyday-objects.js";

// use node everyday-objects.js to try this out.
// Create instances
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo()); // Output: "2020 Toyota Corolla"
myCar.startEngine(); // Output: "The engine of Toyota Corolla is now running."

const myPhone = new Phone("Samsung", "A13", 78);
myPhone.makeCall(1234567);
myPhone.batteryStatus();

const myBook = new Book("Javascript from Beginner to Professional", "Laurence Lars Svekis, Rob Percival, and Maaike van Putten", 73);
console.log(myBook.getSummary());
myBook.readPage();

const myLaptop = new Laptop("HP", "Stream", 4);
myLaptop.bootUp();
myLaptop.shutDown();

const myBackpack = new Backpack("EastSport", "Pink", 30);
myBackpack.open();
myBackpack.checkCapacity();