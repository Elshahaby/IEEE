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