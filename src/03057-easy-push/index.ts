/* 答案 */
type Push<T extends any[], U> = [...T, U];

/* 测试 */
type Result = Push<[1, 2], "3">; // [1, 2, '3']
