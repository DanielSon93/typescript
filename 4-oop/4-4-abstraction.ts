{
  type Coffee = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeeMachine {
    makeCoffee(shots: number): Coffee;
  }

  interface CommercialCoffeeMachine {
    makeCoffee(shots: number): Coffee;
    setBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachineImpl implements CoffeeMachine, CommercialCoffeeMachine {
    private static BEANS_PER_SHOT: number = 7;
    private beans: number = 0;

    private constructor(beans: number) {
      this.beans = beans;
    }

    static coffeeMaker(beans: number): CoffeeMachineImpl {
      return new CoffeeMachineImpl(beans);
    }

    setBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩은 0개 이상이어야 합니다")
      }
      console.log("커피콩 채우기");
      this.beans += beans;
    }

    clean() {
      console.log("커피기계 청소");
    }

    private grindBeans(shots: number) {
      console.log("grinding beans");
      if (this.beans < CoffeeMachineImpl.BEANS_PER_SHOT * shots) {
        throw new Error("커피콩이 충분하지 않습니다");
      }
      this.beans -= CoffeeMachineImpl.BEANS_PER_SHOT * shots;
    }

    private preheat() {
      console.log("heating up...");
    }

    private extract(shots: number): Coffee {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      }
    }

    makeCoffee(shots: number): Coffee {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class AmateurBarista {
    constructor(private coffeeMachine: CoffeeMachine) { }
    makeCoffee() {
      this.coffeeMachine.makeCoffee(2);
    }
  }

  class ProBarista {
    constructor(private coffeeMachine: CommercialCoffeeMachine) { }
    makeCoffee() {
      this.coffeeMachine.makeCoffee(2);
      this.coffeeMachine.setBeans(10);
      this.coffeeMachine.clean();
    }
  }

  const coffeeMaker: CoffeeMachineImpl = CoffeeMachineImpl.coffeeMaker(100);
  const amateur = new AmateurBarista(coffeeMaker);
  const pro = new ProBarista(coffeeMaker);
  pro.makeCoffee();
}