class Singleton {
  static instance = undefined;

  constructor() {
    this.version = this.version;
  }

  static getInstance(version) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(version);
    }
    return Singleton.instance;
  }
}

function appSingleton() {
  const singleton1 = Singleton.getInstance('version-1');
  const singleton2 = Singleton.getInstance('version-2');
  console.log(singleton1 === singleton2);
}

appSingleton();
