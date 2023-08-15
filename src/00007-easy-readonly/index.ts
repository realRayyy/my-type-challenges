namespace T0007 {
  /* 答案 */
  type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  /* 测试 */
  interface Todo {
    title: string;
    description: string;
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar",
  };

  // todo.title = "Hello" // Error: cannot reassign a readonly property
  // todo.description = "barFoo" // Error: cannot reassign a readonly property
}
