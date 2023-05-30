interface MastodonCar {
  useGPS(): void;
}

interface RhinoCar {
  useGPS(): void;
}

class MastodonSedanCar implements MastodonCar {
  useGPS(): void {
    console.log("SEDAN Mastodon GPS");
  }
}

class MastodonHatchbackCar implements MastodonCar {
  useGPS(): void  {
    console.log("Hatchback Mastodon GPS");
  }
}

class RhinoSedanCar implements RhinoCar {
  useGPS(): void  {
    console.log("SEDAN Rhino GPS");
  }
}

class RhinoHatchbackCar implements RhinoCar {
  useGPS(): void  {
    console.log("Hatchback Rhino GPS");
  }
}

interface CarAbstractFactory {
  createMastodon(): MastodonCar;
  createRhino(): RhinoCar;
}

class SedanCarFactory implements CarAbstractFactory{
  createMastodon(): MastodonCar {
    return new MastodonSedanCar();
  }
  createRhino(): RhinoCar {
    return new RhinoSedanCar();
  }
}

class HatchbackCarFactory implements CarAbstractFactory{
  createMastodon(): MastodonCar {
    return new MastodonHatchbackCar();
  }
  createRhino(): RhinoCar {
    return new RhinoHatchbackCar();
  }
}

function appCarFactory(factory: CarAbstractFactory) {
  const mastodon = factory.createMastodon();
  const rhino = factory.createRhino();

  mastodon.useGPS();
  rhino.useGPS();
}

// appCarFactory(new HactchbakCarFactory());
// appCarFactory(new SedanCarFactory());

type FactoryType = 'sedan' | 'hatchback';
function createFactory(type: FactoryType):CarAbstractFactory {
  const factories = {
    sedan: SedanCarFactory,
    hatchback: HatchbackCarFactory
  }

  const Factory = factories[type];
  return new Factory();
}

appCarFactory(createFactory('hatchback'));
appCarFactory(createFactory('sedan'));

export {};