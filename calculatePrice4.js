// Enumeration for breakfast items
const BreakfastItem = {
  SANDWICH: "sandwich",
  BAGEL: "bagel",
};

// Enumeration for sandwich types
const SandwichType = {
  EGG: "egg",
  TURKEY: "turkey",
};

// Enumeration for bagel toppings
const BagelTopping = {
  BUTTER: "butter",
  CREAM_CHEESE: "cream cheese",
};

// Function to calculate the price of a breakfast item
function calculatePrice4(itemType, sandwichType, bagelTopping) {
  let basePrice = 3;

  if (itemType === BreakfastItem.SANDWICH) {
    switch (sandwichType) {
      case SandwichType.EGG:
      case SandwichType.TURKEY:
        basePrice += 1;
        break;
    }
  } else if (itemType === BreakfastItem.BAGEL) {
    switch (bagelTopping) {
      case BagelTopping.BUTTER:
      case BagelTopping.CREAM_CHEESE:
        basePrice += 0.5;
        break;
    }
  }

  return basePrice;
}

console.log(calculatePrice4(BreakfastItem.SANDWICH, SandwichType.EGG, null)); // Output: 4

console.log(calculatePrice4(BreakfastItem.SANDWICH, SandwichType.TURKEY, null)); // Output: 4

console.log(calculatePrice4(BreakfastItem.SANDWICH, null, null)); // Output: 3

console.log(calculatePrice4(BreakfastItem.BAGEL, null, BagelTopping.BUTTER)); // Output: 3.5

console.log(calculatePrice4(BreakfastItem.BAGEL, null, BagelTopping.CREAM_CHEESE)); // Output: 3.5

console.log(calculatePrice4(BreakfastItem.BAGEL, null, null)); // Output: 3
