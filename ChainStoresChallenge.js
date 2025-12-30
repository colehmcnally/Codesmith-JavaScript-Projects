class Chain {
  constructor(name) {
    this.name = name;
    this.totalStores = 0; // total stores, initially set to zero
    this.locations = []; // array of all existing franchises of the chain store (string name)
  }

  openStore(owner, city) {
    const newFranchise = new Franchise(owner, city); // Take the above strings passed in as arguments in openStore an pass into the Franchise class
    this.locations.push(newFranchise);// Add new instance of Franchise to the locations array in the Chain instance

    this.totalStores++; // increment total stores by 1
  }

  closeStore(city) {
    let foundStore = false;
    for (let i = 0; i < this.locations.length; i++) { // iterate through each element in the locations array from the Franchise instance
      if (this.locations[i].city === city) { // if the city element of the Franchise property in the locations array at the current index position matches the input city
        foundStore = true; // update our found store flag to true
        this.totalStores--; // decrement total stores by one (closing the store)
        this.locations.splice(i, 1) // remove this store from the array of locations
        console.log(`${this.name} closed the store in ${city}!`); // display the string `${this.name} closed the store in ${city}.`
      }
    }
    if (foundStore === false) {
      console.log(`${this.name} doesn't have a store in ${city}.`); // if foundStore is still false (meaning the store doesn't exist), display the string `${this.name} doesn't have a store in ${city}.`
    }
  }
}

class Franchise {
  constructor(owner, city) {
    this.owner = owner;
    this.city = city;
  }
}

const buenoBell = new Chain('Bueno Bell');

buenoBell.openStore('Will', 'Phoenix');
buenoBell.openStore('Kyle', 'Austin');
buenoBell.openStore('Allison', 'Wichita');

console.log(buenoBell.totalStores); //should log 3
console.log(buenoBell.locations[0].owner) //should log 'Will'

buenoBell.closeStore('Austin'); // Should log 'Bueno Bell closed the store in Austin.'
buenoBell.closeStore('Maui'); // Should log 'Bueno Bell doesn't have a store in Maui.'
