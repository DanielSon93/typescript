{
  // Javascript에서 불변성을 유지하는 방법 (상수)
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const DAYS_ENUM = Object.freeze({ 'MONDAY': 0, 'TUESDAY': 1, 'WEDNESDAY': 2, });
  const TODAY = DAYS_ENUM.MONDAY;

  // Typescript에서 불변성을 유지하는 방법 (상수)
  // enum : 가장 앞글자만 대문자로 작성
  // enum에 별도의 값을 지정하지 않을 경우 인덱스와 동일한 방식 적용 / 문자열일 경우 모든 값 수동 적용 필요
  // Union Type으로 대체가 가능하기때문에 잘 사용하지 않음
  enum Days {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Friday;
  day = Days.Monday;
  day = 4;
  console.log(day);
}