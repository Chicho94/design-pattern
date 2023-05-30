class BaseCar {
  showCost() {
    throw new Error("Method not implement");
  }
}

class MastodonCar extends BaseCar {
  showCost() {
    console.log("Mastodon car cost: 300$");
  }
}

class RhinoCar extends BaseCar {
  showCost() {
    console.log("Rhino car cost: 100$");
  }
}

class CarFactory {
  makeCar() {
    throw new Error("Method not implement");
  }
}

class MastodonCarFactory extends CarFactory {
  makeCar() {
    return new MastodonCar();
  }
}

class RhinoCarFactory extends CarFactory {
  makeCar() {
    return new RhinoCar();
  }
}

function appFactory(factory) {
  const car = factory.makeCar();
  car.showCost();
}

function createFactory(type) {
  const factories = {
    mastodon: MastodonCarFactory,
    rhino: RhinoCarFactory,
  };
  const Factory = factories[type];
  return new Factory();
}

appFactory(createFactory('mastodon'));
appFactory(createFactory('rhino'));

export {};