{
  // Union Type : 지정한 타입 내에서만 허용 (OR)
  type Direction = 'up' | 'down' | 'right' | 'left';
  function move(direction: Direction) {
    console.log(`move ${direction}`);
  }
  move("down");
  move("up");
  move("right");
  move("left");

  type Size = 2 | 4 | 6 | 8 | 10;
  const size1: Size = 2;
  const size2: Size = 4;
  const size3: Size = 6;
  const size4: Size = 8;
  const size5: Size = 10;

  // 로그인 성공 / 실패에 따른 처리
  type Success = {
    result: true;
    response: {
      data: string;
    },
  }
  type Fail = {
    result: false;
    reason: string;
  }
  type State = Success | Fail;

  function login(state: State) {
    if(state.result) {
      console.log(state.response.data);
    } else {
      console.log(state.reason);
    }
  }

  login({
    result: true,
    response: {
      data: "Login Data",
    }
  });
}