class SingletonTS {
  private static instance: SingletonTS;
  private version: string;

  private constructor(version: string) {
    this.version = version;
  }

  static getInstance(version: string): SingletonTS {
    if (SingletonTS.instance !== undefined) {
      SingletonTS.instance = new SingletonTS(version);
    }
    return SingletonTS.instance;
  }
}

function appSingletonTS() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    return s1;
  } else {
    throw new Error("Singleton failed, variables contain different instances");
  }
}

appSingleton();
