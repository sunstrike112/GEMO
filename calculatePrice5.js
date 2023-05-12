function calculatePrice5(items) {
  let total_price = 0.0;
  let breakdown = [];

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let name = item.name;
    let price = item.price;
    let quantity = item.quantity;
    let item_total = price * quantity;
    let tax = item_total * 0.0725; // 7.25% tax rate
    let item_total_with_tax = item_total + tax;

    breakdown.push({
      name: name,
      quantity: quantity,
      price: price,
      tax: tax,
      total_with_tax: item_total_with_tax,
    });

    total_price += item_total_with_tax;
  }

  return {
    breakdown: breakdown,
    total_price: total_price,
  };
}

let items = [
  { name: 'Item 1', price: 10.0, quantity: 2 },
  { name: 'Item 2', price: 5.0, quantity: 4 },
  { name: 'Item 3', price: 3.0, quantity: 1 },
];

let result = calculatePrice5(items);

console.log('Item Breakdown:');
result.breakdown.forEach(function (item) {
  console.log(
    `Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}, Tax: ${item.tax}, Total with Tax: ${item.total_with_tax}`
  );
});

console.log(`Total Price: ${result.total_price}`);
