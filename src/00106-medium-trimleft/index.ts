namespace T00106 {
  /* 答案 */
  type Space = " " | "\n" | "\t";
  type TrimLeft<T extends string> = T extends `${Space}${infer R}`
    ? TrimLeft<R>
    : T;

  /* 测试 */
  type trimed = TrimLeft<"  Hello World  ">; // 应推导出 'Hello World  '
}
