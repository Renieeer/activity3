// Starter data
const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

// Start coding here...

// 1 computaion of price and quantity
const multiplyPrice = cart.map(item => cart.price * cart.quantity);
console.log(multiplyPrice);

// 2 item  descriptions
const descriptions = items.map(item => `${item.name} - ₱${item.price}`);
console.log(descriptions); 

// 3 total cart values
const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
console.log(`Total Price: ${totalPrice}`);

// 4 using const as function
