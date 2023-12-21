{
  // Type Aliases : 새로운 타입 생성
  type Str = string;
  type Num = number;
  let typeStr: Str = '안녕하세요';
  let typeNum: Num = 5;

  type Student = {
    name: string;
    age: number;
  }

  const student: Student = {
    name: 'Daniel',
    age: 200,
  }
  console.log(student);

  // Literal Types : 특정 데이터로 명시 가능
  type Name = 'Daniel';
  type Age = 10;
  type Human = true;
  const name: Name = 'Daniel';
  const age: Age = 10;
  const isHuman: Human = true;
}