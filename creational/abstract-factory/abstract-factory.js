class MastodonCar {
  useGPS() {
    throw new Error("Method not implemented");
  }
}

class RhinoCar {
  useGPS() {
    throw new Error("Method not implemented");
  }
}

class MastodonSedanCar extends MastodonCar {
  useGPS() {
    console.log("SEDAN Mastodon GPS");
  }
}

class MastodonHatchbackCar extends MastodonCar {
  useGPS() {
    console.log("Hatchback Mastodon GPS");
  }
}

class RhinoSedanCar extends RhinoCar {
  useGPS() {
    console.log("SEDAN Rhino GPS");
  }
}

class RhinoHatchbackCar extends RhinoCar {
  useGPS() {
    console.log("Hatchback Rhino GPS");
  }
}

class CarAbstractFactory {
  createMastodonCar() {
    throw new Error("Method not implemented");
  }
  createRhinoCar() {
    throw new Error("Method not implemented");
  }
}

class SedanCarFactory {
  createMastodon() {
    return new MastodonSedanCar();
  }
  createRhino() {
    return new RhinoSedanCar();
  }
}

class HatchbackCarFactory {
  createMastodon() {
    return new MastodonHatchbackCar();
  }
  createRhino() {
    return new RhinoHatchbackCar();
  }
}

function appCarFactory(factory) {
  const mastodon = factory.createMastodon();
  const rhino = factory.createRhino();

  mastodon.useGPS();
  rhino.useGPS();
}

// appCarFactory(new HactchbakCarFactory());
// appCarFactory(new SedanCarFactory());

function createFactory(type){
  const factories = {
    sedan: SedanCarFactory,
    hatchback: HatchbackCarFactory
  }

  const Factory = factories[type];
  return new Factory();
}

appCarFactory(createFactory('hatchback'));
appCarFactory(createFactory('sedan'));
