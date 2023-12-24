{
  // number 타입만 사용 가능
  function checkNull(item: number | null): number {
    if (item == null) {
      throw new Error("null 입니다.");
    }
    return item;
  }
  const num1: number = checkNull(123);
  console.log(num1);

  // any를 반환하기때문에 타입이 안전하지 않음
  function checkNullAny(item: any | null): any {
    if (item == null) {
      throw new Error("null 입니다.");
    }
    return item;
  }
  let itemAny = checkNullAny(100);
  itemAny = '테스트';

  // 특정 타입을 받아서 해당 타입을 그대로 반환 (어떠한 타입으로든 받을 수 있음)
  function checkNullGeneric<T>(item: T | null): T {
    if (item == null) {
      throw new Error("null 입니다.");
    }
    return item;
  }
  const itemGeneric: string = checkNullGeneric('테스트');
  const boalGeneric: boolean = checkNullGeneric(true);
}