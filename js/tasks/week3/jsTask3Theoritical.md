# [Task3](https://github.com/saifsweelam/IEEE-Nodejs-Roadmap/blob/main/beginners/week-3.md)


# Theoritical Task3

* ### Compare between the three types of quantifiers in regular expressions (`?`, `+`, `*`).
    
    - #### x? : Matches the preceding item "x" 0 or 1 times.
    - #### x+ : Matches the preceding item "x" 1 or more times.
    - #### x* : Matches the preceding item "x" 0 or more times.     

<br>

---

<br>

* ### What are the characters that can be represented by `\w` and `\b` in a regular expression?

    - #### \b => matches at the beginning or end of a word.
    - #### \w => matches word characters. [a-z , A-Z , 0-9 And Underscore].

<br>

---

<br>


* ### Compare between the `Map` and `WeakMap` according to the way they save keys and values.
[Article](https://www.geeksforgeeks.org/what-is-the-difference-between-map-and-weakmap-in-javascript/)

#### Map
 - A Map is an unordered list of key-value pairs where the key and the value can be of any type like string, boolean, number, etc.	
 - Maps are iterable.	
 - Maps will keep everything even if you don’t use them.	
 -The garbage collector doesn’t remove a key pointer from “Map” and also doesn’t remove the key from memory.	
 - Maps have some properties : .set, .get, .delete, .size, .has, .forEach, Iterators.	


<br>

#### WeakMap

- In a Weak Map, every key can only be an object and function. It used to store weak object references.
- WeakMaps are not iterable.
- WeakMaps holds the reference to the key, not the key itself.
- The garbage collector goes ahead and removes the key pointer from “WeakMap” and also removes the key from memory. 
  WeakMap allows the garbage collector to do its task but not the Map.
- WeakMaps have some properties : .set, .get, .delete, .has.

<br>

---

<br>

* Write an example of a string which matches the following pattern:
    ```js
    const regex = /^(0[1-9]|[12]\d|3[01])[-\/](0[1-9]|1[0-2])[-\/]\d{4}$/;

    const s = "01-01-2222";

    console.log(regex.test(s)); // true
  
    ```

    and write another string that violates the following pattern:
    ```js
      const regex = /^(?!.*\bieee\b).+$/i;  // Not ?! (begin with 0 or more chars then ieee)
  
      const s = 'ieee';
     // const ss = 'Hello seif'; // that fits the expression 

      console.log(regex.test(s)); // false
  
    ```
