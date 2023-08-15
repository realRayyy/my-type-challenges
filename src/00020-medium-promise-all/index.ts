/* 答案 */
type PromiseRes<T> = T extends Promise<infer P> ? PromiseRes<P> : T;
declare function PromiseAll<T extends any[]>(
  params: readonly [...T]
): Promise<{
  [P in keyof T]: PromiseRes<T[P]>;
}>;

/* 测试 */
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

// 应推导出 `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);
