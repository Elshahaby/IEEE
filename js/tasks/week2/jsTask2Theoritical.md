# Task

 <br>

## 1- Theoritical

- ### a. Explain the difference between primitive types and reference types in JavaScript.

  - #### [article_1(freeCodeCamp)](https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/)
  - #### [article_2(Medium) (tarrrrsh)](https://medium.com/@rabailzaheer/primitive-vs-reference-types-a-javascript-guide-6b3638ed508a)

  - ex:-

  ```js
  /* Reference Types: Reference Comparison  */

  let originalObject = { name: "Mohamed", age: 21 };
  let coypedObject = Object.assign({}, originalObject);
  let obj1 = originalObject;

  originalObject.age = 25;

  console.log(originalObject.age); // 25
  console.log(obj1.age); // 25
  console.log(coypedObject.age); // 21
  // the two objects not point to the same place at heap
  console.log(coypedObject === originalObject); // false
  // the two refreced type (objects) are point to the same place in heap
  console.log(obj1 === originalObject); // true
  ```

---

<br>

### b. Compare the two methods of creating a new function in JavaScript: Function Declaration and Function Expression. Discuss the differences between them in terms of hoisting and provide examples for each.

#### [Medium](https://medium.com/@shwetakoffficiall/difference-between-function-expression-and-function-declaration-in-javascript-0327d561dfd6)

#### [MDN article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

1. function declaration : it is the function that have to have a name , and can be hoisted (appears below the call in code) ,
   unlike expression (anonymous) function is not hoisted

2. function expression (anonymous) : it is the function that does not have to have a name , and it can't be hoisted , and it used for convenient when  
   passing a function as an argument to another function , and you can say that arrow functions are expression (anonymous) function.

3. Function hoisting only works with function declarations — not with function expressions.

   ```js
   // calling declaration fucntion that defiend blew the call
   console.log(square(5)); // 25

   function square(n) {
     return n * n;
   }
   // define the function then call it
   console.log(square(5)); // 25

   // both will works
   ```

   ```js
   console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
   const square = function (n) {
     return n * n;
   };

   // using anonymous (expression) function must call it after define the fucntion
   console.log(square(5)); // 25
   ```

4. Nested Function and closures discussed at the article

   - The inner function can be accessed only from statements in the outer function.
   - The inner function forms a closure: the inner function can use the arguments and variables of the outer function,
     while the outer function cannot use the arguments and variables of the inner function.

5. name conflicts in Nested functions is discussed too with examples
   The scope chain here is {inside, outside, global object}.

   - so if the global and the outside function and inside function have the same named variable or parameter
     -- the inside function search for its local variables and parameters then if it is not find the variable
     it will go to outside function to search for the variable if not find it , it will go to global scope.

6. function parameters are discussed (Default & Rest).

7. arrow function is discussed at article.

---

<br>

### c. Research the concept of "Pure Function" and then respond to the following: Under what conditions can a function be classified as a pure function?

[dev article](https://dev.to/codeofrelevancy/you-need-to-know-about-pure-functions-impure-functions-in-javascript-57)

1. Pure functions do not modify any external state, such as variables or objects outside the  
   function. They only use the input arguments to perform calculations and return the result.

   Below function takes two numbers, a and b, as input arguments and returns their sum. This function is a pure function because it always produces the same output for the same input and does not have any side effects.

   ```js
   function add(a, b) {
     return a + b;
   }
   ```

---

<br>

### d. Write down the array methods that you have studied and classify them to destructive and not destructive.

- medium - geeksforgeeks -

#### [Article](https://www.curiouslychase.com/posts/list-of-destructive-and-non-destructive-javascript-array-methods/)

#### 1. A destructive method modifies the original array that the method is being run on.

- Destructive Methods
  - copyWithin
  - fill
  - pop
  - push
  - reverse
  - shift
  - sort
  - splice
  - unshift

#### 2. The non-Destructive approach does not modify the original data instead of it creates a new array or object

- Non-Destructive Methods
  - concat
  - entries
  - every
  - filter
  - find
  - findIndex
  - findLast
  - findLastIndex
  - flat
  - flatMap
  - forEach
  - Array.from()
  - includes
  - indexOf
  - join
  - keys
  - lastIndexOf
  - map
  - reduce
  - reduceRight
  - slice
  - some
  - toLocaleString
  - values

---

<br>
