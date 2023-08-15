# Exclude

Implement the built-in Exclude<T, U>

Exclude from T those types that are assignable to U

For example:

```typescript
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```

## 思路

对于联合类型来说会自动分发条件。  
例如 `T extends U ? X : Y`, `T` 可能是 `A | B` 的联合类型, 那实际情况就变成`(A extends U ? X : Y) | (B extends U ? X : Y)`
