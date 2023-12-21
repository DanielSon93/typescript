{
  // Array : 선언 방법
  const fruits: string[] = ['tomato', 'banana'];
  const count: Array<number> = [1, 2, 3, 4, 5];

  // readonly : 불변성 보장 (제네릭 방식 허용 X)
  function printFruits(fruits: readonly string[]) {}

  // Tuple : 인덱스를 통해서 접근하는 방식이라 가독성이 떨어짐 -> interface, type alias, class로 대체해서 사용 권장
  // 동적으로 연관되는 다른 타입의 데이터를 묶는 상황에서 주로 사용
  let person: [string, number];
  person = ['Daniel', 31];
  console.log(person[0]); // Daniel
  console.log(person[1]); // 31

  // 구조 분해 할당을 통해 일정부분 개선 가능 (React의 useState와 비슷한 방식)
  const [name, age] = person;
  console.log(name) // Daniel
  console.log(age) // 31
}