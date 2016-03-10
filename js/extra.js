function getPrice(id, items) {
  var price;

  items.forEach(function (item) {
    if (item.id === id) {
      price = item.price;
    }
  });

  return price;
}

function getCount(id, cart) {
  var count = 0;

  cart.forEach(function (itemCart) {
    if (itemCart.id === id) {
      count = itemCart.count;
    }
  });

  return count;
}

function getSubtotal(id, cart) {
  var subtotal = 0;

  cart.forEach(function (itemCart) {
    if (itemCart.id === id) {
      subtotal = itemCart.subtotal;
    }
  });

  return subtotal;
}

function getTime() {
  return new Date().getTime();
}