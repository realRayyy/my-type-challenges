namespace T02257 {
  /* 答案 */
  type GetMinusNum<T, K extends number[]> = [1, ...K]["length"] extends T
    ? K["length"]
    : GetMinusNum<T, [1, ...K]>;
  type MinusOne<T extends number> = GetMinusNum<T, []>;

  /* 测试 */
  type Zero = MinusOne<1>; // 0
  type FiftyFour = MinusOne<55>; // 54
}
