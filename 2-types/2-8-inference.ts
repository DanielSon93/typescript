{
  // Type Inference (타입 추론)
  let text = "hello";
  // 함수의 파라미터에 별도의 타입을 지정하지 않을 경우 any 타입으로 고정
  function test(message) {
    console.log(message);
  }
  test("type");
  test(5);

  // 숫자끼리 더한 값을 return 해주기때문에 자동으로 number 타입으로 추론
  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(5, 10);
}