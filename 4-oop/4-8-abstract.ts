{
  type Coffee = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  interface CoffeeMachine {
    makeCoffee(shots: number): Coffee;
  }

  // 객체 생성 불가
  abstract class CoffeeMachineImpl implements CoffeeMachine {
    private static BEANS_PER_SHOT: number = 7;
    private beans: number = 0;

    constructor(beans: number) {
      this.beans = beans;
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

    protected abstract extract(shots: number): Coffee;

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

    protected extract(shots: number): Coffee {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      }
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

  class SweetCoffeeMachine extends CoffeeMachineImpl {
    constructor(beans: number) {
      super(beans);
    }

    private makeSugar() {
      console.log("설탕 제조 중");
    }

    protected extract(shots: number): Coffee {
      this.makeSugar();
      return {
        shots,
        hasSugar: true,
      }
    }

    makeCoffee(shots: number): Coffee {
      const coffee = super.makeCoffee(shots);
      this.makeSugar();
      return {
        ...coffee,
        hasSugar: true,
      }
    }
  }

  const machines: CoffeeMachine[] = [
    new CaffeLatteMachine(30, '1234'),
    new SweetCoffeeMachine(40)
  ];

  machines.map(machine => {
    console.log(machine.makeCoffee(3));
  })

}