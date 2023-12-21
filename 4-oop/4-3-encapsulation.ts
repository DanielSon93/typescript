{
  type Coffee = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    // static : 객체간 공유가 되면서 변경이 일어나지 않을 경우 지정
    // private : 외부에서 해당 변수에 직접 접근하지 않게 하기 위해 설정
    private static BEANS_PER_SHOT: number = 7;
    private beans: number = 0;

    private constructor(beans: number) {
      this.beans = beans;
    }

    // 생성자를 private으로 숨기고 coffeeMaker를 통해서 객체 생성이 가능하도록 유도
    static coffeeMaker(beans: number): CoffeeMaker {
      return new CoffeeMaker(beans);
    }

    setBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩은 0개 이상이어야 합니다")
      }
      this.beans += beans;
    }

    makeCoffee(shots: number): Coffee {
      const beansNeeded: number = CoffeeMaker.BEANS_PER_SHOT * shots;
      if (this.beans < beansNeeded) {
        throw new Error("커피콩이 충분하지 않습니다");
      }
      this.beans -= beansNeeded;

      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const coffeeMaker = CoffeeMaker.coffeeMaker(100);
  coffeeMaker.setBeans(100);

  class User {
    get fullName(): string {
      return `${this.lastName} ${this.firstName}`;
    }
    private _age = 5;
    get age(): number {
      return this._age;
    }
    set age(age: number) {
      this._age = age;
    }

    constructor(private lastName: string, private firstName: string) {
      this.lastName = lastName;
      this.firstName = firstName;
    }
  }

  const user: User = new User('Son', 'Daniel');
  console.log(user.fullName);
  console.log(user.age);
  user.age = 10;
  console.log(user.age);
}