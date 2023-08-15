namespace T0004 {
  /* 答案 */
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  /* 测试 */
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = MyPick<Todo, "title" | "completed">;

  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  };
}
