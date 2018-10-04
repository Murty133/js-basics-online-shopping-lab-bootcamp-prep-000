var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {itemName: item, itemPrice: Math.floor((Math.random() * 100) + 1)}
  cart.push(itemObject)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var string
  if (cart.length === 0) {
    string = "Your shopping cart is empty"
  }
  else {
    string = "In your cart, you have"
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        string += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else {
        string += ` ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    }
  }
  string += "."
  return string
}

function total() {
  var total
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

/*
function removeFromCart(item) {
  var i = 0
  while(i < cart.length) {
    if (item[i].itemName === item) {
      cart.splice(i, 1, "")
    }
  }
}
*/

function placeOrder(cardNumber) {
  var string
  if (cardNumber === "") {
    string = "Sorry, we don't have a credit card on file for you"
  }
  else {
    cart = ""
    string = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}`
  }
  return string
}
