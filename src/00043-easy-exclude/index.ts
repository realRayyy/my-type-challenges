/* 答案 */
type MyExclude<T, K> = T extends K ? never : T;

/* 测试 */
type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
