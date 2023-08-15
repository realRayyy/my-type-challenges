# Omit

Implement the built-in `Omit<T, K>` generic without using it.

Constructs a type by picking all properties from `T` and then removing `K`

For example

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
```

## 思路

- `P` 在 `T` 的范围循环
- `P` 得到的是 `T` 中的键
- 对于这个 `P` 我们为他断言为 `P` 或 `never`
- 如果 `P` 的这个键在 `K` 的范围中，我们就断言当前的 `P` 是 `never`（抛弃原先 `P` 的值），那么在对象循环的时候 `never` 就会被忽略掉，从而实现 `Omit`

```typescript
[
  (P in keyof T) as
  (P extends K ? never : P)
]
```
