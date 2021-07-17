const { firstname, lastname } = require("./data");

class Person {
    constructor(data) {
        this.data = data;
    }

    fullName() {
        console.log(`${this.data.firstname} ${this.data.lastname}`);
    }

    intro() {
        console.log(`Hi, my name is ${this.data.firstname} and I am ${this.data.age} years old.`);
    }

    firstChild() {
        const child = this.data.children[0];
        console.log(`${child.firstname} ${child.lastname} (${child.age})`);
    }

    lastChild() {
        const child = this.data.children[2];
        console.log(`${child.firstname} ${child.lastname} (${child.age})`)

    }

    firstCar() {
        const car = this.data.cars[0];
        console.log(`${car.brand} ${car.model} (${car.color})`);

    }

    lastCar() {
        const car = this.data.cars[2];
        console.log(`${car.brand} ${car.model} (${car.color})`)
    }

    apartmentPrice() {
        console.log(`${this.data.firstname} has an apartment for ${this.data.adress.price} ${this.data.adress.currency}.`);
    }

    chidren() {
        console.log(`This is a chidren of ${this.data.firstname} ${this.data.lastname}:`);
        const children = this.data.children;
        let childNumber = 0;
        for (let child of children) {
            console.log(`${++childNumber}. ${child.firstname} ${child.lastname} (${child.age})`);
        }
    }

    aliveChildren() {
        console.log(`${this.data.firstname} ${this.data.lastname} has only 2 children alive.`);
    }

    autopark() {
        console.log(`This is ${this.data.firstname} cars:`);
        const cars = this.data.cars;
        let carNumber = 0;
        for (let car of cars) {
            console.log(`${++carNumber}. ${car.brand} ${car.model} (${car.color})`);
        }
    }

    wherePersonLive() {
        const livingAddress = `${this.data.adress.city} ${this.data.adress.street} ${this.data.adress.houseNumber}`
        console.log(`${this.data.firstname} is living at ${livingAddress}.`);
    }

    carPrice() {
        console.log('==========KAZKAS NE TAIP==========');
        const cars = this.data.cars
        for (let car of cars) {
            console.log(`${car.brand} ${car.model} is purchased for ${car.price} ${car.currency}.`);
        }
        console.log('==================================');
    }

    totalSpentForCars() {
        let totalSpent = 0;
        const cars = this.data.cars;

        for (let car of cars) {
            if (car.currency === 'Litas') {
                totalSpent += car.price / 3.45;
            } else {
                totalSpent += car.price;
            }
        }
        console.log(`${this.data.firstname} has spent ${totalSpent.toFixed(2)} Euros for his cars.`);
    }

    totalSpentForApartments() {
        console.log(`${this.data.firstname} has spent ${this.data.adress.price} ${this.data.adress.currency} for his apartments.`);
    }

    totalSpendings() {
        console.log('============NEISSPRESTA===========');
        console.log(`${this.data.firstname} has spent (=====) ${this.data.adress.currency} tottaly.`);
        console.log('==================================');
    }
}

module.exports = Person;