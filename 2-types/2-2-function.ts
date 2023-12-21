{
  // Javascript
  function jsAdd(a, b) {
    return a + b;
  }

  // Typescript
  function tsAdd(a: number, b: number): number {
    return a + b;
  }

  // Javascript
  function jsFetchNum(id) {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript
  function tsFetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Optional Parameter : 값 유무 상관 X (값이 없을 경우 undefined로 초기화)
  function printFullName(lastName: string, firstName?: string) {
    console.log(`${firstName} ${lastName}`);
  }
  printFullName('Daniel', 'Son');
  printFullName('Daniel');
  printFullName('Daniel', undefined);

  // Default Parameter : 값 유무 상관 X (값이 없을 경우 지정한 기본값으로 초기화)
  function createUnit(hp: number, mp: number = 10) {
    console.log(`유닛 생성 : HP : ${hp} / MP : ${mp}`);
  }
  createUnit(100, 50);
  createUnit(300);
  createUnit(1500);

  // Rest Parameter : 파라미터의 개수 상관 X (배열 형태로 받는 구조)
  function addNumber(...numbers: number[]): number {
    return numbers.reduce((a, c) => a + c);
  }
  console.log(addNumber(10, 20, 30));
  console.log(addNumber(1, 2, 3, 4, 5, 6, 7, 8));
  console.log(addNumber(3, 6, 9));
}