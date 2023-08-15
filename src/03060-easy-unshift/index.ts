namespace T3060 {
  /* 答案 */
  type Unshift<T extends any[], U> = [U, ...T];

  /* 测试 */
  type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
}
