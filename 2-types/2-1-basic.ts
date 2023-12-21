{
  /**
   * Javascript 기본 타입
   * 원시 타입 : number, string, boolean, null, undefined, bigint, symbol
   * 참조 타입 : object, array, function
   */



  /**
   * Typescript 기본 타입
   */

  // number
  const num: number = 0;

  // string
  const str: string = 'Daniel';

  // boolean
  const boal: boolean = true;

  // Union Type : 둘중에 한가지 타입만 허용
  let union1: number | undefined;
  union1 = 10;
  union1 = undefined;

  let union2: string | null;
  union2 = 'Daniel';
  union2 = null;

  function type(): number | undefined {
    return 3;
  }

  // void : 아무것도 반환하지 않을 경우 사용 (생략 가능)
  function returnNothing(): void {
    console.log('Return Nothing');
  }

  // never : 에러를 던지거나, 무한반복을 하는 등 return 값을 반환하지 않아야되는 경우 사용
  function throwError(): never {
    // 서버에 로그를 남기는 등의 작업
    throw new Error("Error Occur");
    // while(true) {}
  }



  /**
   * Typescript 되도록이면 사용하면 안되는 타입 선언 방식
   */

  // undefined : 단일로 변수 타입 지정 시 undefined 값만 할당 가능하기때문에 사용 X
  let badCase1: undefined;
  badCase1 = undefined;

  // null : 단일로 변수 타입 지정 시 null 값만 할당 가능하기때문에 사용 X
  let badCase2: null;
  badCase2 = null;

  // void : 단일로 변수 타입 지정 시 undefined 값만 할당 가능하기때문에 사용 X
  let badCase3: void;
  badCase3 = undefined;

  // never : 단일로 변수 타입 지정 시 어떠한 값도 할당이 불가능하기때문에 사용 X
  let badCase4: never;

  // any : 동적 타입 언어인 자바스크립트와 동일하게 다양한 타입을 담을 수 있기때문에 사용 X
  let badCase5: any;
  badCase5 = true;
  badCase5 = 'Bad Case!!!';
  badCase5 = 31;

  // unknown : 동적 타입 언어인 자바스크립트와 동일하게 다양한 타입을 담을 수 있기때문에 사용 X
  let badCase6: unknown;
  badCase6 = true;
  badCase6 = 'Bad Case!!!';
  badCase6 = 31;

  // object : 원시 타입을 제외한 모든 타입을 담을 수 있기때문에 사용 X
  let badCase7: object;
  badCase7 = [1, 2, 3];
  badCase7 = {name: 'daniel', age: 31};
  badCase7 = {dog: true, name: 'sugar'};
}