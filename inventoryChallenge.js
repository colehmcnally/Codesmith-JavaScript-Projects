function Inventory(item, price) {
    this[item] = { price: price, quantity: 1 } // new object with the item and its metrics (price and quantity)
}

Inventory.prototype.addItem = function (item, price) {
    if (this[item] !== undefined) { // if the item exists in myInventory...
        this[item].quantity++; // increment the item's quantity property by 1
        this[item].price = price; // update that item's price to the number passed in
    } else {
        this[item] = { price: price, quantity: 1 };// otherwise, add the item and it's price to the object
    }
}

Inventory.prototype.deleteItem = function (string) {
    if (this[string] !== undefined && this[string].quantity > 0) { // if the string is contained in the inventory and is greater than zero
        this[string].quantity--; // reduce the item's quantity property by 1
        return 'Deleted'; // return the string 'Deleted'
    } else {
        return 'Nothing to delete'; // else, return the string 'Nothing to delete'
    }
}

Inventory.prototype.checkItem = function (string) {
    if (string in this) { // check if the string exists as a property in the inventory object
        return this[string]; // if so, return the object for that item
    } else {
        return 'Item is not in inventory'; // else, return the string 'Item is not in inventory'
    }
}


const myInventory = new Inventory('cucumber', 2);
console.log(myInventory)

// Uncomment these lines to check your work!
myInventory.addItem('carrot', 1);
console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
myInventory.addItem('cucumber', 3);
console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'