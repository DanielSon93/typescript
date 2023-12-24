{
  interface Employee {
    pay(): void;
  }

  class FullTime implements Employee {
    pay() {
      console.log("돈!!!");
    }

    workFullTime() {
      console.log("풀타임!!!");
    }
  }

  class PartTime implements Employee {
    pay() {
      console.log("돈!!!");
    }

    workPartTime() {
      console.log("파트타임!!!");
    }
  }

  // 세부적인 타입을 받아서 추상적인 타입으로 return하는 함수는 안좋은 사용
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const obj = {
    name: 'daniel',
    age: 31,
  }

  const obj2 = {
    animal: 'dog',
  }

  function getValue<O, K extends keyof O>(obj: O, key: K): O[K] {
    return obj[key];
  } 

  console.log(getValue(obj, 'name'));
  console.log(getValue(obj, 'age'));
  console.log(getValue(obj2, 'animal'));
}