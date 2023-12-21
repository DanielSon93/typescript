{
  // Type Assertion : 타입에 대한 확신이 있을때 명시적 형변환
  // 예상한 타입과 다른 타입의 값이 return 되었을 경우 문제가 발생되기때문에 특별한 경우가 아니면 사용 X
  function printStr(): any {
    return "hello";
  }

  // 현재 any 타입이기 때문에 string이 return 되지만 length와 같은 string에서 제공하는 함수 사용 불가
  const str = printStr();
  // any 타입을 string 타입으로 형변환
  console.log((str as string).length);
  console.log((<string>str).length);

  // number 타입에 배열에서 사용하는 push 메소드를 사용해서 에러가 발생하는 경우
  const num: any = 5;
  console.log((num as Array<number>).push(1));

  // ! : 확실한 경우 사용
  // 함수 호출 후 or 변수 뒤에 선언
  function checkType(): number[] | undefined {
    return undefined;
  }
  let result = checkType()!;
  result!.push(3);

  // DOM 사용시에도 가능
  const button = document.querySelector('tag')!;
}