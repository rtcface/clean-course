export abstract class Vehicle {
  abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }

  constructor(private numberOfSeats: number) {
    super();
  }
}

export class Audi extends Vehicle {
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }

  constructor(private numberOfSeats: number) {
    super();
  }
}
export class Toyota extends Vehicle {
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }

  constructor(private numberOfSeats: number) {
    super();
  }
}

export class Honda extends Vehicle {
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }

  constructor(private numberOfSeats: number) {
    super();
  }
}

export class Nissan extends Vehicle {
    getNumberOfSeats(): number {
      return this.numberOfSeats;
    }
  
    constructor(private numberOfSeats: number) {
      super();
    }
  }
