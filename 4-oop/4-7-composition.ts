{
  // 커피 내부 구성요소
  type Coffee = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }


  // 인터페이스
  interface CoffeeMachine {
    makeCoffee(shots: number): Coffee;
  }

  interface MilkMaker {
    pourMilk(cup: Coffee): Coffee;
  }

  interface SugarMaker {
    pourSugar(cup: Coffee): Coffee;
  }


  // 아메리카노 생산
  class CoffeeMachineImpl implements CoffeeMachine {
    private static BEANS_PER_SHOT: number = 7;

    constructor(private beans: number = 0, private milk: MilkMaker, private sugar: SugarMaker) { }

    setBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩은 0개 이상이어야 합니다")
      }
      console.log("커피콩 채우는중...");
      this.beans += beans;
    }

    clean() {
      console.log("기계 청소중...");
    }

    private grindBeans(shots: number) {
      if (this.beans < CoffeeMachineImpl.BEANS_PER_SHOT * shots) {
        throw new Error("커피콩이 충분하지 않습니다");
      }
      console.log("커피콩 가는중...");
      this.beans -= CoffeeMachineImpl.BEANS_PER_SHOT * shots;
    }

    private preheat() {
      console.log("따뜻하게 하는중...");
    }

    private extract(shots: number): Coffee {
      console.log(`샷추가중...`);
      return {
        shots,
        hasMilk: false,
      }
    }

    makeCoffee(shots: number): Coffee {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      return this.milk.pourMilk(this.sugar.pourSugar(coffee));
    }
  }

  // 우유 생산
  class CheapMilkMaker implements MilkMaker {
    private makeMilk() {
      console.log("우유 생산 중...");
    }

    pourMilk(coffee: Coffee): Coffee {
      this.makeMilk();
      return {
        ...coffee,
        hasMilk: true,
      }
    }
  }

  // 고급 우유 생산
  class ExpensiveMilkMaker implements MilkMaker {
    private makeMilk() {
      console.log("우유 생산 중...");
    }
    private pourGold() {
      console.log("금 붓는 중...");
    }

    pourMilk(cup: Coffee): Coffee {
      this.makeMilk();
      this.pourGold();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 우유 없음
  class NoMilkMaker implements MilkMaker {
    pourMilk(cup: Coffee): Coffee {
      return cup;
    }
  }

  // 설탕 생산
  class AutomaticSugarMaker implements SugarMaker {
    private makeSugar() {
      console.log("설탕 생산 중...");
    }

    pourSugar(coffee: Coffee): Coffee {
      this.makeSugar();
      return {
        ...coffee,
        hasSugar: true,
      }
    }
  }

  // 설탕 없음
  class NoSugarMaker implements SugarMaker {
    pourSugar(cup: Coffee): Coffee {
      return cup;
    }
  }

  const cheapMilkMaker = new CheapMilkMaker();
  const noMilkMaker = new NoMilkMaker();
  const expensiveMilkMaker = new ExpensiveMilkMaker();
  const automaticSugarMaker = new AutomaticSugarMaker();
  const noSugarMaker = new NoSugarMaker();

  // 아메리카노
  const americanoMachine = new CoffeeMachineImpl(100, noMilkMaker, noSugarMaker);
  console.log(americanoMachine.makeCoffee(2));

  // 카페라떼
  const caffeLatteMachine = new CoffeeMachineImpl(100, cheapMilkMaker, noSugarMaker);
  console.log(caffeLatteMachine.makeCoffee(2));

  // 달달한 아메리카노
  const sweetAmericanoMachine = new CoffeeMachineImpl(100, noMilkMaker, automaticSugarMaker);
  console.log(sweetAmericanoMachine.makeCoffee(2));

  // 달달한 카페라떼
  const sweetCaffeLatteMachine1 = new CoffeeMachineImpl(100, cheapMilkMaker, automaticSugarMaker);
  console.log(sweetCaffeLatteMachine1.makeCoffee(2));

  // 달달한 고급 우유가 들어간 카페라떼
  const sweetCaffeLatteMachine2 = new CoffeeMachineImpl(100, expensiveMilkMaker, automaticSugarMaker);
  console.log(sweetCaffeLatteMachine2.makeCoffee(2));

}