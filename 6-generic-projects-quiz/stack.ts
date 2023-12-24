{
  type StackNode<T> = {
    readonly value: T;
    readonly pointer?: StackNode<T>;
  }

  interface Stack<T> {
    readonly length: number;
    pop(): T;
    push(value: T): void;
  }

  class StackImpl<T> implements Stack<T> {
    private _length: number = 0;
    get length() {
      return this._length;
    }
    private head?: StackNode<T>;

    constructor(private MAX_LENGTH: number) { }

    pop(): T {
      if (this.head == null) {
        throw new Error("Stack Empty");
      }
      const node: StackNode<T> = this.head;
      this.head = node.pointer;
      this._length--;
      return node.value;
    }

    push(value: T): void {
      if (this._length >= this.MAX_LENGTH) {
        throw new Error("Stack Full");
      }
      this.head = { value, pointer: this.head };
      this._length++;
    }
  }

  const stack = new StackImpl<string>(1000);
  stack.push("test1");
  stack.push("test2");
  stack.push("test3");
  while (stack.length > 0) {
    console.log(stack.pop());
  }
  
  const stack2 = new StackImpl<number>(1000);
  stack2.push(345);
  stack2.push(567);
  stack2.push(789);
  while (stack2.length > 0) {
    console.log(stack2.pop());
  }
}