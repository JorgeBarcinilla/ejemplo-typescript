
enum CarType {
  SEDAN = 1,
  SUV,
  TRUCK,
  VAN
}

type CarColor = 'Red' | 'Blue' | 'Green';

interface CreateCar {
  color: CarColor;
  year: number;
  type: CarType;
  brand: string;
}

type EditCar = Partial<CreateCar>;
type EditCar2 = Pick<CreateCar, 'brand' | 'color'>;
type EditCar2Optional = Partial<EditCar2>;
type EditCar3 = Omit<CreateCar, 'brand'>;
type EditCarRequired = Required<EditCar>;
type Comodin = Record<string, number | string | Date>;
type EditCarReadonly = Readonly<CreateCar>;

let example2: EditCarReadonly = {
  color: 'Red',
  year: 2020,
  type: CarType.SEDAN,
  brand: 'Toyota'
};

let example: Comodin = {
  "key": 1,
  "key2": "2",
  "key3": new Date()
};

interface ICar {
  getColor: CarColor;
  setColor: CarColor;
  getYear(): number;
  setYear: (year: number) => void;
  getType: CarType;
  setType: CarType;
  getBrand(): string;
  setBrand(brand: string): void;
}

class Car implements ICar {
  private name: String;
  private color: CarColor;
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

  get getColor (): CarColor {
    return this.color;
  }
  set setColor(color: CarColor) {
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

let car = new Car({brand: 'Toyota', color: 'Red', type: CarType.SEDAN, year: 2020});
// console.log("============= Car =============");
// console.log("brand: ", car.getBrand());
// console.log("color: ", car.getColor);
// console.log("typeof car: ", typeof car);
// console.log("typeof carType: ", typeof car.getType);

let car2 = new Car({brand: 'Nissan', color: 'Green', type: CarType.SUV, year: 2019});
// console.log("============= Car 2 =============");
// console.log("brand: ", car2.getBrand());
// console.log("color: ", car2.getColor);
// console.log("typeof car: ", typeof car2);
// console.log("typeof carType: ", typeof car2.setBrand);

let car3 = new Car({brand: 'Mazda', color: 'Blue', type: CarType.TRUCK, year: 2021});
// console.log("============= Car 3 =============");
// console.log("brand: ", car3.getBrand());
// console.log("color: ", car3.getColor);
// console.log("typeof car: ", typeof car3);
// console.log("typeof carType: ", typeof car3.setBrand);

type PropertiesCar = keyof Car;

let cars = [car, car2, car3];

enum BikeType{
  ENDURO = 1,
  SPORT,
  SUPERSPORT,
  URBAN
}

type BikeColor = "Orange" | "Gray" | "Black"

interface ICreateBike{
  color: BikeColor;
  year: number;
  type: BikeType;
}

class Bike {
  color: BikeColor;
  year: number;
  type: BikeType;

  constructor(createBike: ICreateBike){
    this.color = createBike.color
    this.year = createBike.year
    this.type = createBike.type
  }
}
let bike = new Bike({color: 'Black', type: BikeType.ENDURO, year: 2022});
let bike2 = new Bike({color: 'Gray', type: BikeType.SUPERSPORT, year: 2020});
let bike3 = new Bike({color: 'Orange', type: BikeType.URBAN, year: 2021});
let bikes = [bike, bike2, bike3]



function filter<T>(vehicles: T[], property: keyof T, value: T[keyof T]): T[]{
  return vehicles.filter((vehicle)=> vehicle[property] === value);
}

console.log(filter<Bike>(bikes, "year", 2022));

