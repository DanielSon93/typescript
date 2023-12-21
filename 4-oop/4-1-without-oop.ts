{
  type Coffee = {
    shots: number;
    hasMilk: boolean;
  }

  const BEANS_PER_SHOT: number = 7;
  let beans: number = 0;

  function makeCoffee(shots: number): Coffee {
    const beansNeeded: number = BEANS_PER_SHOT * shots;
    if (beans < beansNeeded) {
      throw new Error("Not enough coffee beans");
    }
    beans -= beansNeeded;

    return {
      shots,
      hasMilk: false,
    }
  }

  beans += 50;
  const coffee = makeCoffee(2);
  console.log(coffee);
  
}