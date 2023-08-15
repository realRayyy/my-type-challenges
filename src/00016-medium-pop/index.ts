/* 答案 */
type Pop<T extends any[]> = T extends [...args: infer P, any] ? P : never;

/* 测试 */
type arr1 = ["a", "b", "c", "d"];
type arr2 = [3, 2, 1];

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]
