'use strict';
const cart = {

  items: [],
  totalPrice: 0,
  count: 0,

  add(productName, productPrice, productCount = 1) {
    const items = {
      productName,
      productPrice,
      productCount,
    };
    this.items.push(items);
    this.increaseCount(productCount);
  },

  increaseCount(productCount) {
    this.count += productCount;
  },

  calculateItemPrice() {
    return this.items.reduce((total, item) => total + (item.productPrice * item.productCount), 0);
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(`${JSON.stringify(this.items)}\n Total: ${this.totalPrice}`);
  },
};

Object.defineProperty(cart, 'totalPrice', {
  get() {
    return this.calculateItemPrice();
  },
});

cart.add('Apple', 150, 3);
cart.add('Bread', 50, 1);
cart.add('Water', 30, 8);
cart.totalPrice === 10;
cart.print();


