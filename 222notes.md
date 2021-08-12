**Destytojo sprendimas**

```js
class Person {
  constructor(data) {
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.age = data.age;
    this.childrenList = data.children;
    this.address = data.address;
    this.cars = data.cars;
  }

  fullName() {
    const fn = this.firstname + ' ' + this.lastname;
    console.log(fn);
    return fn;
  }

  intro() {
    console.log(
      `Hi, my name is ${this.firstname} and I am ${this.age} years old.`
    );
  }

  firstChild() {
    console.log(this.childInfo(0));
  }

  lastChild() {
    const lastChildIndex = this.childrenList.length - 1;
    console.log(this.childInfo(lastChildIndex));
  }

  childInfo(childIndex) {
    const child = this.childrenList[childIndex];
    return `${child.firstname} ${child.lastname} (${child.age})`;
  }

  firstCar() {
    console.log(this.carInfo(0));
  }

  lastCar() {
    const lastCarIndex = this.cars.length - 1;
    console.log(this.carInfo(lastCarIndex));
  }

  carInfo(carIndex) {
    const car = this.cars[carIndex];
    return `${car.brand} ${car.model} (${car.color})`;
  }

  apartmentPrice() {
    console.log(
      `${this.firstname} has an apartment for ${this.address.price} ${this.address.currency}.`
    );
  }

  chidren() {
    console.log(`This is a chidren of ${this.fullName()}:`);
    for (const childIndex in this.childrenList) {
      const aboutChild = this.childInfo(childIndex);
      console.log(`${+childIndex + 1}. ${aboutChild}`);
    }
  }

  aliveChildren() {
    let aliveCount = 0;

    for (const child of this.childrenList) {
      if (child.alive) {
        aliveCount++;
      }
    }

    console.log(`${this.fullName()} has only ${aliveCount} children alive.`);
  }

  autopark() {
    console.log(`This is ${this.firstname} cars:`);
    for (const carIndex in this.cars) {
      const aboutCar = this.carInfo(carIndex);
      console.log(`${+carIndex + 1}. ${aboutCar}`);
    }
  }

  wherePersonLive() {
    const address = `${this.address.city} ${this.address.street} ${this.address.houseNumber}`;
    console.log(`${this.firstname} is living at ${address}`);
  }

  carPrice(carIndex) {
    const car = this.cars[carIndex];
    const carDetails = `${car.brand} ${car.model}`;
    const carPrice = `${car.price} ${car.currency}`;

    console.log(`${carDetails} is purchased for ${carPrice}.`);
  }

  totalSpentForCars(printMessage = true) {
    let amount = 0;

    for (const car of this.cars) {
      amount += this.convertCurrency(car.price, car.currency);
    }

    if (printMessage) {
      console.log(
        `${this.firstname} has spent ${amount.toFixed(2)} Euros for his cars.`
      );
    }
    return amount;
  }

  convertCurrency(price, currency) {
    if (currency === 'Euros') {
      return price;
    }

    if (currency === 'Litas') {
      return price / 3.45;
    }
  }

  totalSpentForApartments(printMessage = true) {
    let amount = 0;

    for (const apartment of [this.address]) {
      amount += this.convertCurrency(apartment.price, apartment.currency);
    }

    if (printMessage) {
      console.log(
        `${this.firstname} has spent ${amount} Euros for his apartments.`
      );
    }
    return amount;
  }

  totalSpendings() {
    const total =
      this.totalSpentForCars(false) + this.totalSpentForApartments(false);
    console.log(
      `${this.firstname} has spent ${total.toFixed(2)} Euros tottaly.`
    );
  }
}
```
