/* 答案 */
type MyAwaited<T> = T extends Promise<infer P>
  ? P extends Promise<any>
    ? MyAwaited<P>
    : P
  : never;

/* 测试 */
type ExampleType = Promise<Promise<string>>;

type Result = MyAwaited<ExampleType>; // string
