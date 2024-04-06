let cart = [
  { id: 1, product: "tshirt", quantity: 0 },
  { id: 1, product: "tshirt", quantity: 2 },
  { id: 1, product: "tshirt", quantity: 4 },
];

let quantityIs2 = cart.filter((ele) => {
  if (ele.quantity == 2) {
    return ele;
  }
});
console.log(quantityIs2);

// let updatedProduct = cart.find((ele) => ele.id === 1);
// updatedProduct.quantity = updatedProduct.quantity + 1;

// console.log(updatedProduct);
