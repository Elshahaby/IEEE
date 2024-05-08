


## Theoritical :-

### 1. Explain the difference between == and === in JavaScript.
        == Return true only if the two operands are equal  
        while === returns true only if both values and data types are the same for the two variables
```js

console.log(10 == "10"); // true , Compare VAlue Only
console.log(-100 == "-100"); // true , Compare VAlue Only
console.log(10 != "10"); // false

console.log(10 === "10"); // false , Compare VAlue and Data Type
console.log(10 !== "10"); // true , Compare VAlue and Data Type
console.log(10 !== 10); // False , Compare VAlue and Data Type

```
---

### 2. Elshahaby is simply trying to sort an array of numbers but unfortunately this sort method isn't working as expected.                         Can you tell Elshahaby the  reason for this behavior and how to implement it in a right way?


#### The reason of that is sort() method sorts the elements as "strings" in alphabetical and ascending order.

```js

const arr = [10, 5, 11];
arr.sort(); // [10 , 11 , 5]

// solution to sort numbers in right way
arr.sort(function(a,b){return a-b})  // [5 , 10 , 11]

```

<br>

---
---

<br>

## Practical :-

### - Write a JavaScript program that converts temperature from Celsius to Fahrenheit.

```js

let Celsius = 40;

let Fahrenheit = Celsius * (9/5) + 32;
console.log(Fahrenheit);

```

<br>

---

 ### - Write a JavaScript program that takes an array and updates it in place. Each Element in the array is a string or a number. If it's a number, you should multiply it by 3. If it's a string, you should make the first letter uppercase and the rest lowercase.

 ```js

let arr = [19, "dreams", "PlayGround", 2, "xD", "i"];

console.log(arr);

for(let i=0;i< arr.length ;++i){
 
    if(typeof arr[i] == typeof 10) 
      arr[i] = arr[i]*3
    else
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1,arr[i].length).toLowerCase();
}

console.log(arr);

 ```
 
 <br>

 ---

 ### - Adel wrote a secret message that he didn't want anyone to read easily. To make it difficult to understand, he reversed it. He then thought that it wasn't enough, so he wanted to perform another minor change that would make it unrecognizable. Write a JavaScript program that takes a string s and prints it again after reversing it and making all vowel letters uppercase.


 ```js

function go (str){

  let s = str;
  let vowel = ["a" , "e" , "i" , "o" , "u"];
  
  
  let arrOfChars = s.split("");
  let revString = arrOfChars.reverse();
  let joinString = revString.join("");
  
  let res = "";
  
  for(let i=0;i<joinString.length;++i){
    
      if( vowel.includes( joinString[i] ) )
        res += joinString.charAt(i).toUpperCase(); 
      else 
        res += joinString[i];

  }

  return res;
}

let s = "Hey There, I'm glad to have you";
console.log(go(s));

 ```


 ### - Write a JavaScript program that takes a string and an array of forbidden letters. Your program should print the string after removing the forbidden letters from it and make all letters separated by hiphens -


 ```js

function go (str , arr){

  let text = str;
  let forbidLet = arr;

  let res="";
  let sp = "-"
  
  for(let i=0;i<text.length;i++){
    let up = text[i].toUpperCase();
    let lw = text[i].toLowerCase();

      if(!forbidLet.includes(up) && !forbidLet.includes(lw) )
        res += text[i] + sp ;
  }

  let ans = res.substring(0,res.length-1)

  return ans;
}


let text = "Please";  //Pp  Pp
let forbiddenLetters = ['r', 'x', 'p', 'a'];

console.log( go(text,forbiddenLetters) );

 ```