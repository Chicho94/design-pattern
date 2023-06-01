interface CarProductionLine {
  setAirBags(howMany: number): CarProductionLine;
  setColor(color: AvailableColors): CarProductionLine;
  setEdition(edition: string): CarProductionLine;
  resetProductionLine(): void;
}

type CarCatalog = "mastodon" | "rhino";
type ConstructorParams = { model: CarCatalog };

class SedanProductionLine implements CarProductionLine {
  private sedanCar!: Car;
  private internalModel!:CarCatalog;

  constructor({ model }: ConstructorParams) {
    this.setInternalModel(model);
    this.resetProductionLine();
  }

  setAirBags(howMany: number): SedanProductionLine {
    this.sedanCar.airBags = howMany;
    return this;
  }

  setColor(color): SedanProductionLine {
    this.sedanCar.color = color;
    return this;
  }

  setEdition(edition: AvailableColors): SedanProductionLine {
    this.sedanCar.edition = edition;
    return this;
  }

  setInternalModel(model) {
    this.internalModel = model;
  }

  setModel() {
    this.sedanCar.model = "sedan";
  }

  resetProductionLine() {
    this.sedanCar =
      this.internalModel === "mastodon" ? new MastodonCar() : new RhinoCar();
    return this;
  }

  build() {
    this.setModel();
    const sedanCar = this.sedanCar;
    this.resetProductionLine();
    return sedanCar;
  }
}

type AvailableColors = 'red' | 'black' | 'gray' | 'blue';
class Car {
    private _edition!: string;
    private _model!: string;
    private _airBags: number = 2;
    private _color: AvailableColors = "black";

  set airBags(howMany) {
    this._airBags = howMany;
  }
  set color(color) {
    this._color = color;
  }
  set edition(edition) {
    this._edition = edition;
  }
  set model(model) {
    this._model = model;
  }
}

class MastodonCar extends Car {
  constructor() {
    super();
  }
}

class RhinoCar extends Car {
  constructor() {
    super();
  }
}

class Director {
  setProductionLine(productionLine) {
    this.productionLine = productionLine;
  }

  constructorCvTEdition() {
    this.productionLine.setAirBags(4).setColor("blue").setEdition("CVT");
  }

  constructorSignatureEdition() {
    this.productionLine.setAirBags(8).setColor("red").setEdition("Signature");
  }
}

function appBuilder(director) {
  const mastodonSedanProductionLine = new SedanProductionLine({
    model: "mastodon",
  });

  director.setProductionLine(mastodonSedanProductionLine);
  director.constructorCvTEdition();
  const mastodonSedanCvT = mastodonSedanProductionLine.build();
  console.log(mastodonSedanCvT);

  director.constructorSignatureEdition();
  const mastodonSedanSignature = mastodonSedanProductionLine.build();
  director.setProductionLine(mastodonSedanSignature);
  console.log(mastodonSedanSignature);
}

appBuilder(new Director());
