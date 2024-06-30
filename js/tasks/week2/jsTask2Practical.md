## 2- Practical

#### Inventory Management System

Create a basic inventory management system in JavaScript.

##### Instructions:

* Create Item Objects

    - Define an createItem function that takes name, category, price, and stock as parameters and returns an item object.
    - Include methods within the item object to:
        * `updateStock(newStock)`: Updates the stock level of the item.
        * `applyDiscount(discount)`: Applies a discount to the item's price.

* Create an Inventory Object

    - Define an inventory object that initializes an empty array to store items.
    - Add methods to the inventory object to:
        * `addItem(item)`: Adds an item to the inventory.
        * `removeItem(itemName)`: Removes an item from the inventory by its name.
        * `getItem(itemName)`: Retrieves an item from the inventory by its name.
        * `filterItems(predicate)`: Uses a higher-order function to filter items based on a given predicate function.

* Create several item instances and add them to the inventory.

    - Update stock and apply discounts to certain items.
    - Use the `filterItems` method to find items under a specific category or below a certain stock level.
    - Remove an item from the inventory and verify it is no longer available.
    - Ensure proper handling of cases where item details might be missing or undefined, using logical OR.


```js

// Item Object
function createItem(name,category,price,stock){
    return{
      name,
      category,
      price,
      stock,

      updateStocks(newStock){
        this.stock = newStock;
      },

      applyDiscount(discount){
        this.price -= this.price*(discount/100);
      },
    };
}

// Invetory Object

let Invetory = {
  items: [],

  addItem(item){
    this.items.push(item);
  },

  removeItem(itemName){
    this.items = this.items.filter( item => itemName !== item.name);
  },

  getItem(itemName){
    let flag = this.items.find( item => item.name === itemName );
    flag = flag || "no such item"
    return flag;
  },
  filterItems(predicateFun){
    return this.items.filter(predicateFun);
  },

};

// creating item instance 
let item1 = createItem("Book","reading" , 30 , 50);
let item2 = createItem("T_shirt","wears" , 350 , 550);
let item3 = createItem("Laptop","Electronics" , 30000 , 5000);

// adding items to Invetory
Invetory.addItem(item1);
Invetory.addItem(item2);
Invetory.addItem(item3);

// updating stock and applying discounts
console.log(item1.stock); // 50
item1.updateStocks(60);
console.log(item1.stock); // 60
console.log(item2.price); // 350
item2.applyDiscount(20);
console.log(item2.price); // 280


// filtring items
let filtringUnderCodition = Invetory.filterItems( (item) => item.stock < 500 || item.category === "Electronics" );
console.log(filtringUnderCodition);

// removing item
Invetory.removeItem('Laptop');
console.log(Invetory.items);
// when you try to get the removed item you will not find it;
console.log(Invetory.getItem('Laptop')); // no such item
console.log(Invetory.getItem('T_shirt')); 

```