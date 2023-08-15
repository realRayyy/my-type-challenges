# Awaited

If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

For example: if we have `Promise<ExampleType>` how to get ExampleType?

```typescript
type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
```

## 思路

注意 `Promise` 嵌套 `Promise` 的情况
