'use strict';

//Напиши класс Car с указанными свойствами и методами.

class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
  static getSpecs(Car) {
    console.log(
      `maxSpeed: ${Car.maxSpeed}, speed: ${Car.speed}, isOn: ${Car.isOn}, distance: ${Car.distance}, price: ${Car.price}`,
    );
  }
  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor(maxSpeed, price) {
    this.maxSpeed = maxSpeed;
    this._price = price;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this.isOn = true;
    console.log('Wroooooommm!!!');
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
    console.log('Eeeeeeeee!!!');
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
      this.speed += value;
      console.log(this.speed);
      return this.speed;
    } else {
      console.log('Error, you try to exceed max speed!');
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed -= value;
      console.log(this.speed);
      return this.speed;
    } else {
      console.log('Your car isn`t moving.');
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (this.isOn === true) {
      this.distance = this.speed * hours + this.distance;
      console.log(this.distance);
      return this.distance;
    } else {
      console.log('Your car is still turned off.');
    }
  }
}

const mustang = new Car(200, 2000);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, ПРИ ВЫКЛЮЧЕННОЙ МАШИНЕ СКОРОСТЬ НЕ МОЖЕТ БЫТЬ speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
