# Practical Task3

- Use object and array destructing to get the values: `"Zamalek"` and `"4th"`. Your solution should be 2 lines of code maximum.

  ```js
  const user = {
    name: "Ashraf Ben Sharqy",
    age: 29,
    teams: ["Wydad", "Al Hilal", "Zamalek", "Al Gazira", "Al-Rayyan"],
    nationalTeam: {
      name: "Morroco",
      best: {
        africanCupOfNations: ["Champion", 2018],
        worldCup: ["4th", 2022],
      },
    },
  };
  ```

  ### Answer

  ```js
  const {
    teams: [, , ans, ,],
    nationalTeam: {
      best: {
        worldCup: [ans1],
      },
    },
  } = user;
  console.log(`first answer ${ans} , second answer ${ans1}`);
  ```

    <br>
    
    ---

    <br>

  - Given the object `player`:

  ```js
  let player = {
    name: "Samir Kamona",
    club: "Al Ahly",
    score: 25,
  };
  ```

  Use the spread operator to create a new object `fantasyPlayer`, which has the `score` set to `50` and has a `position` attribute set to `"ST"`. Make sure the original object remains unchanged.

  ### Answer

  ```js
  function go() {
    let player = {
      name: "Samir Kamona",
      club: "Al Ahly",
      score: 25,
    };

    let fantasyPlayer = {
      ...player,
      score: 50,
      position: "ST",
    };
    console.log(fantasyPlayer);

    // console.log({...player , score: 50 , position: "ST"});
  }

  go();
  ```

    <br>
    
    ---

    <br>

  - Write a function that takes an array of items, filters all elements starting with `hand` and ending with `s` or `y` or `le` (case insensitive). There may be other characters in between.

  ```js
  function go() {
    let Arr = [
      "handOn",
      "hands",
      "hanDLes",
      "Handcuffs",
      "handmade",
      "in-hands",
      "HANDINGLY",
    ];

    let ArrRe = /^(hand)(\w+)?(s|le|y)$/i;

    let ans = Arr.filter((el) => ArrRe.test(el));

    console.log([...ans]);
  }

  go();
  ```

<br>

---

<br>

- Applying the concept of closures, create a counter using JavaScript and HTML. The counter should be able to increment, decrement, and reset its value, demonstrating the practical use of closures to maintain state between function calls.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Counter</title>
    <link rel="stylesheet" type="text/css" href="counter.css" />
  </head>
  <style>
    .counter {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      margin-top: 20px;
    }

    button {
      padding: 10px 20px;
      font-size: 18px;
      margin: 0 10px;
    }
  </style>

  <body>
    <div class="counter">
      <button id="decrementBtn">-</button>
      <span id="count">0</span>
      <button id="incrementBtn">+</button>
    </div>

    <button id="resetBtn">Reset</button>

    <script src="main.js"></script>
  </body>
</html>
```

```js
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    updateCount();
  }

  function decrement() {
    count--;
    updateCount();
  }

  function reset() {
    count = 0;
    updateCount();
  }

  function updateCount() {
    document.getElementById("count").textContent = count;
  }

  return {
    increment,
    decrement,
    reset,
  };
}

const counter = createCounter();

document
  .getElementById("incrementBtn")
  .addEventListener("click", counter.increment);
document
  .getElementById("decrementBtn")
  .addEventListener("click", counter.decrement);
document.getElementById("resetBtn").addEventListener("click", counter.reset);
```
