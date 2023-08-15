/* 答案 */
type Concat<T extends any[], U extends any[]> = [...T, ...U];

/* 测试 */
type Result = Concat<[1], [2]>; // expected to be [1, 2]
