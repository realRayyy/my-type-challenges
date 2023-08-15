/* 答案 */
type Includes<T extends any[], U> = T extends [U, ...any] ? true : false;

/* 测试 */
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
