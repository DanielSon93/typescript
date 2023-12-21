{
  // Intersection Type : 지정한 모든 요구조건을 만족해야함 (&)
  type Student = {
    name: string;
    score: number;
  }

  type Worker = {
    employeeId: number;
    work(): void;
  }

  function internWork(person: Student & Worker) {
    console.log(person.name);
    console.log(person.score);
    console.log(person.employeeId);
    person.work();
  }

  internWork({
    name: 'Daniel',
    score: 100,
    employeeId: 3,
    work() {
      console.log("Work Hard");
    },
  })
}