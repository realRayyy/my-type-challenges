/* 答案 */
type MyParameters<T> = T extends (...args: infer P) => unknown ? P : never;

/* 测试 */
const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
