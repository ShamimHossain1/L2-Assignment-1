
# 🔹 Interfaces vs Types in TypeScript

Both `interface` and `type` are basically used to define the shape of objects in TypeScript. However, there are some differences in terms of syntax, usecases and behavior.

### Interfaces: 
`Interfaces` are like blueprints of objects. It is also called the object architects. It's perfectly structure an object that should be and make code more readable. It has an amazing feature like, if i create an interface in one file and then in another part in my project i want to add more properties to it I can easily do it by creating another interface using the same name. Typescript will merge these declarations into single interface.

Example:
```ts
interface User {
  name: string;
  email: string;
}

interface User {
  age: number;
  city?: string; 
}

// TypeScript sees User as { name: string; email: string; age: number; city?: string; }
```
### Types: 
`Types` on the other hand are more like versatile alchemist. While it can be use for creating object type blueprint but it has some other features too. Types can create aliases for primitive types. Also `types` has the feature of define unions (a value can be multiple types), intersections(a value must satisfy multiple types). But compare to `interfaces`, `types` don't support the declaration merging. If a types alias declared already it cant be extend by declaring another same types alias. 
Example:
```ts
type ID = string | number; // ID can be either a string or a number
type Point = { x: number; y: number };
type Circle = Point & { radius: number }; // Circle has x, y, and radius
```
- Use `interface` when you're defining shapes of objects that may be extended or implemented.
- Use `type` when you need unions, intersections, or want to define more complex types.

---

# 🔹 Use of the `keyof` Keyword in TypeScript

In Typescript, The `keyof` keyword used to get a union of property names of a type of interface object. It allows to create types that depend on the keys of another type or interface.

### ✅ Use Case:
Typically `keyof` used for:
- Creating generic function that work with object keys safely.
- Enforcing type safety when accessing properties dynamically.
- Working with mapped types and utility types.

### 🔧 Example:
```ts
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

type PersonKeys = keyof Person;
// Equivalent to: "name" | "age" | "isStudent"

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

// This is type-safe:
const name = getValue(person, "name"); // string
const age = getValue(person, "age");   // number

```

With `keyof`, you're ensuring that only valid keys of an object can be passed, which adds a layer of safety and clarity to your code.

---
Happy Coding! 🚀
