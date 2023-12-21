{
  type Coffee = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    static BEANS_PER_SHOT: number = 7;
    beans: number = 0;

    constructor(beans: number) {
      this.beans = beans;
    }

    static coffeeMaker(beans: number): CoffeeMaker {
      return new CoffeeMaker(beans);
    }

    makeCoffee(shots: number): Coffee {
      const beansNeeded: number = CoffeeMaker.BEANS_PER_SHOT * shots;
      if (this.beans < beansNeeded) {
        throw new Error("Not enough coffee beans");
      }
      this.beans -= beansNeeded;

      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const coffeeMaker1 = new CoffeeMaker(50);
  console.log(coffeeMaker1);
  const coffeeMaker2 = new CoffeeMaker(20);
  console.log(coffeeMaker2);
}