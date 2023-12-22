{
  type StackNode = {
    readonly value: string;
    readonly pointer?: StackNode;
  }

  interface Stack {
    readonly length: number;
    pop(): string;
    push(value: string): void;
  }

  class StackImpl implements Stack {
    private _length: number = 0;
    get length() {
      return this._length;
    }
    private head?: StackNode;

    constructor(private MAX_LENGTH: number) { }

    pop(): string {
      if (this.head == null) {
        throw new Error("Stack Empty");
      }
      const node = this.head;
      this.head = node.pointer;
      this._length--;
      return node.value;
    }

    push(value: string): void {
      if (this._length >= this.MAX_LENGTH) {
        throw new Error("Stack Full");
      }
      this.head = { value, pointer: this.head };
      this._length++;
    }
  }

  const stack = new StackImpl(1000);
  stack.push("test1");
  stack.push("test2");
  stack.push("test3");
  console.log(stack.length);
  while (stack.length > 0) {
    console.log(stack.pop());
  }
}