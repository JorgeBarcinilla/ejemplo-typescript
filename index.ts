
enum CarType {
  SEDAN = 1,
  SUV,
  TRUCK,
  VAN
}

type Color = 'red' | 'blue' | 'green';



interface CreateCar {
  color: Color;
  year: number;
  type: CarType;
  brand: string;
}

interface ICar {
  getColor: Color;
  setColor: Color;
  getYear(): number;
  setYear: (year: number) => void;
  getType: CarType;
  setType: CarType;
  getBrand(): string;
  setBrand(brand: string): void;
}

class Bike {
  color: Color;
  year: number;
  type: CarType;

  constructor(){
    this.color = "blue"
    this.year = 2020
    this.type = CarType.SEDAN
  }
}

class Car implements ICar {
  private name: String;
  private color: Color;
  private year: number;
  private type: CarType;
  private brand: string;

  constructor({brand, color, type, year}: CreateCar) {
    this.color = color;
    this.year = year;
    this.type = type;
    this.brand = brand;
    switch (type) {
      case CarType.SEDAN:
        this.name = this.brand + " - Sedan - " + this.color + " - " + year
        break;
      case CarType.SUV:
        this.name = this.brand + " - Suv - " + this.color + " - " + year
        break;
      case CarType.TRUCK:
        this.name = this.brand + " - Truck - " + this.color + " - " + year
        break;
      case CarType.VAN:
        this.name = this.brand + " - Van - " + this.color + " - " + year
        break;
    }
  }

  get getName(): String {
    return this.name
  }

  get getColor (): Color {
    return this.color;
  }
  set setColor(color: Color) {
    this.color = color;
  }

  get getType (): CarType {
    return this.type;
  }
  set setType(type: CarType) {
    this.type = type;
  }

  getBrand(): string {
    return this.brand;
  }
  setBrand(brand: string): void {
    this.brand = brand;
  }

  getYear(): number {
    return this.year;
  }
  setYear(year: number): void {
    this.year = year;
  }

}

let car = new Car({brand: 'Toyota', color: 'red', type: CarType.SEDAN, year: 2020});
// console.log("============= Car =============");
// console.log("brand: ", car.getBrand());
// console.log("color: ", car.getColor);
// console.log("typeof car: ", typeof car);
// console.log("typeof carType: ", typeof car.getType);

let car2 = new Car({brand: 'Nissan', color: 'green', type: CarType.SUV, year: 2019});
// console.log("============= Car 2 =============");
// console.log("brand: ", car2.getBrand());
// console.log("color: ", car2.getColor);
// console.log("typeof car: ", typeof car2);
// console.log("typeof carType: ", typeof car2.setBrand);

let car3 = new Car({brand: 'Mazda', color: 'blue', type: CarType.TRUCK, year: 2021});
// console.log("============= Car 3 =============");
// console.log("brand: ", car3.getBrand());
// console.log("color: ", car3.getColor);
// console.log("typeof car: ", typeof car3);
// console.log("typeof carType: ", typeof car3.setBrand);

type PropertiesCar = keyof Car;

let cars = [car, car2, car3];

let bike = new Bike();
let bikes = [bike]

function filterCar<T>(vehicles: T[], property: keyof T, value: T[keyof T]): T[]{
  return vehicles.filter((car)=> car[property] === value);
}

console.log(filterCar<Bike>(bikes, "type", CarType.TRUCK));
