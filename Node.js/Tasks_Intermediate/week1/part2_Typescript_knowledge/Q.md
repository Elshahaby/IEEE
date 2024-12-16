# 2- TypeScript Knowledge

### 1- union type: 
union type in typescript allows variavles to be multible types  

```typescript
let x: (string | number)[] =[];                               
x.push(123);
```

### 2-  Type Compatibility:
```typescript
let x: (string | number)[];                                                
x.push(123);
```

it will lead to compile error because x not initialised as [] empty array 


### 3. Generic Types: 

Generic types are a way to create reusable components or functions that can work with any data type while ensuring type safety. By using generics, developers can define a placeholder type that is replaced with a specific type when the component or function is used.

Generics provide flexibility and reusability without sacrificing type safety.

**Usage:**
use generics in classes for creating reusable data structures like a stack.
```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

// Usage examples:
const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop());

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.pop());

```

---

<br>

### 4. Interface Type Flexibility
```ts
// Option 2
interface User<UserIdType> {
    id: UserIdType;
    name: string;
    email: string;
}
```


### 5- TypeScript Execution Comparison: Explain the difference between ts-node and tsx

ts-node : library used to compile and run tsfile by tsc compiler on the run time in one step without generating js file,
it is used in the development when you need to execute the ts file quickly without building files,
it is not support ESM and we need node --loader to execute it which will be deprecated feature in the future and also it doesn't perform full type checking so we need to tsc first so here tsx comes.

tsx : library used to compile and run tsfile on the run ime in one step without generating js file, using esbuild compiler wich is faster and supportes esm and common js but also it doesn't perform full type checking during runtime

- tsx is better

---

<br>

### 6- TypeScript Compilation Commands

1.  `tsc file.ts`
- compiles a Typescript file into javascript.
- note: it only compiles the code not execute it.
- as I say it generates a `.js` file based on the `tsconfig.json file`
- that command used When you want to convert TypeScript code into js and manage execution separately with 'node'.
- Used When you’re preparing your code for production, where you deploy .js files.

<br>

2. `tsx file.ts`
- It is a run time tool that both `transpile` and `executes` the Typescript code in single step.
- It doesn't generate a `.js` file by default, instead it runs the code immediately.
- Use Case: Use this for quick development or testing when you want to run a TypeScript file without generating a separate .js file.
- `tsx file.ts` This compiles the file.ts on the fly and executes it, showing the output directly.

---

<br>

### 7- may be that I need some specifics to be able to solve it.


---

<br>

### 8- Object-Oriented TypeScript Challenge
```ts
interface WakesUpEarly {
  wakeUpEarly(): string;
}

class Student implements WakesUpEarly {
  constructor(
    public firstName: string,
    public lastName: string,
    public grade: number
  ){}

  wakeUpEarly(): string {
    return `${this.firstName} ${this.lastName} wakes up at 6:00 AM every day, I am at grade ${this.grade}.`;
  }
}

const student = new Student("Yousef", "Mamdoh", 10);
console.log(student.wakeUpEarly());
```

---
---

<br>

## Bonus Questions 

1. **TypeScript Validation:** Why do we need additional validators when using TypeScript, even though it has its own type system?
- TypeScript ensures that variables, parameters, and return values conform to their defined types at compile time. However, it does not validate the actual data received at runtime (from HTTP requests, user input, or external APIs).
- If a user provides invalid data (an id as a string instead of a number) (meaning that type user entered not match the ts Type), the app could crash.
- so, validators like `express-validator` or `zod` enforce constraints at runtime by checking that inputs conform to expected rules by providing specific error messages to the user, making it easier for them to correct mistakes

<br>

2. **Type Annotations:** Search for JavaScript Type Comments (JSDoc), then explain the difference between using Type Comments in JavaScript and using TypeScript.

- JSDoc is a comment-based annotation system in JavaScript that allows developers to document their code, including adding type information.
- The type information in comments is used only for editor tooling and static analysis but does not enforce type checking at runtime.
- It allows JavaScript developers to benefit from type hints and intellisense without migrating to TypeScript.

<br>

- TypeScript is a superset of JavaScript with built-in static type-checking and advanced features such as interfaces, enums, and generics.
- TypeScript requires code to be written with explicit type annotations
- TypeScript code is compiled into JavaScript before running.
- TypeScript enforces strict type checking at compile time, which prevents type errors at runtime. 
- It integrates seamlessly with large-scale projects requiring high reliability.