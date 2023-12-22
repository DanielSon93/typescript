{
  type Coffee = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeeMachine {
    makeCoffee(shots: number): Coffee;
  }

  class CoffeeMachineImpl implements CoffeeMachine {
    private static BEANS_PER_SHOT: number = 7;
    private beans: number = 0;

    constructor(beans: number) {
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
      if (this.beans < CoffeeMachineImpl.BEANS_PER_SHOT * shots) {
        throw new Error("커피콩이 충분하지 않습니다");
      }
      console.log("커피콩 가는중");
      this.beans -= CoffeeMachineImpl.BEANS_PER_SHOT * shots;
    }

    private preheat() {
      console.log("따뜻하게 하는중");
    }

    private extract(shots: number): Coffee {
      console.log(`샷추가 : ${shots}`);
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

  class CaffeLatteMachine extends CoffeeMachineImpl {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk() {
      console.log("우유 따뜻하게 하는중");
    }

    makeCoffee(shots: number): Coffee {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      }
    }
  }

  const machine = new CoffeeMachineImpl(30);
  const latteMachine = new CaffeLatteMachine(30, '1234');

  const coffee = latteMachine.makeCoffee(1);
  console.log(latteMachine.serialNumber);
  console.log(coffee);

}