const { firstname, lastname } = require("./data");

class Person {
    constructor(data) {
        this.data = data;
        this.children = this.data.children;
        this.cars = this.data.cars;
        //this.personFullName = this.data.firstname + this.data.lastname;
    }

    fullName() {
        console.log(`${this.data.firstname} ${this.data.lastname}`);
    }

    intro() {
        console.log(`Hi, my name is ${this.data.firstname} and I am ${this.data.age} years old.`);
    }

    firstChild() {
        console.log(`${this.children[0].firstname} ${this.children[0].lastname} (${this.children[0].age})`);
    }

    lastChild() {
        console.log(`${this.children[2].firstname} ${this.children[2].lastname} (${this.children[2].age})`);
    }

    firstCar() {
        console.log(`${this.cars[0].brand} ${this.cars[0].model} (${this.cars[0].color})`);
    }

    lastCar() {
        console.log(`${this.cars[2].brand} ${this.cars[2].model} (${this.cars[2].color})`)
    }

    apartmentPrice() {
        console.log(`${this.data.firstname} has an apartment for ${this.data.adress.price} ${this.data.adress.currency}.`);
    }

    chidren() {
        console.log(`This is a chidren of ${this.data.firstname} ${this.data.lastname}:`);
        let childNumber = 0;
        for (let child of this.children) {
            console.log(`${++childNumber}. ${child.firstname} ${child.lastname} (${child.age})`);
        }
    }

    aliveChildren() {
        let aliveChildrenCount = 0;
        for (let i = 0; i < this.children.length; i++) {
            const childrenAlive = this.children[i];
            if (childrenAlive.alive === true) {
                ++aliveChildrenCount;
            }
        }
        if (this.children.length === aliveChildrenCount) {
        }
        console.log(`${this.data.firstname} ${this.data.lastname} has only ${aliveChildrenCount} children alive.`);
    }

    autopark() {
        console.log(`This is ${this.data.firstname} cars:`);
        let carNumber = 0;
        for (let car of this.cars) {
            console.log(`${++carNumber}. ${car.brand} ${car.model} (${car.color})`);
        }
    }

    wherePersonLive() {
        const livingAddress = `${this.data.adress.city} ${this.data.adress.street} ${this.data.adress.houseNumber}`
        console.log(`${this.data.firstname} is living at ${livingAddress}.`);
    }

    carPrice(index) {
        console.log('=============CAR COST============');
        console.log(`${this.cars[index].brand} ${this.cars[index].model} is purchased for ${this.cars[index].price} ${this.cars[index].currency}.`);
    }

    totalSpentForCars() {
        console.log('==============COSTS===============');
        let totalSpentOnCars = 0;

        for (let car of this.cars) {
            if (car.currency === 'Litas') {
                totalSpentOnCars += car.price / 3.45;
            } else {
                totalSpentOnCars += car.price;
            }
            this.totalSpentOnCars = totalSpentOnCars;
        }
        console.log(`${this.data.firstname} has spent ${this.totalSpentOnCars.toFixed(2)} Euros for his cars.`);
    }

    totalSpentForApartments() {
        console.log(`${this.data.firstname} has spent ${this.data.adress.price} ${this.data.adress.currency} for his apartments.`);
    }

    totalSpendings() {
        console.log('============TOTAL COSTS===========');
        const totalSpent = this.totalSpentOnCars + this.data.adress.price;
        console.log(`${this.data.firstname} has spent ${totalSpent.toFixed(2)} ${this.data.adress.currency} tottaly.`);
        console.log('==================================');
    }
}

module.exports = Person;