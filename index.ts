
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


class Car implements ICar {
  private color: Color;
  private year: number;
  private type: CarType;
  private brand: string;

  constructor({brand, color, type, year}: CreateCar) {
    this.color = color;
    this.year = year;
    this.type = type;
    this.brand = brand;
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
console.log("============= Car =============");
console.log("brand: ", car.getBrand());
console.log("color: ", car.getColor);
console.log("typeof car: ", typeof car);
console.log("typeof carType: ", typeof car.getType);

let car2 = new Car({brand: 'Nissan', color: 'green', type: CarType.SUV, year: 2019});
console.log("============= Car 2 =============");
console.log("brand: ", car2.getBrand());
console.log("color: ", car2.getColor);
console.log("typeof car: ", typeof car2);
console.log("typeof carType: ", typeof car2.setBrand);