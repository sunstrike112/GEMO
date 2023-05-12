// Enumeration for drink types
const DrinkType = {
  HOT: "hot",
  COLD: "cold",
  BLENDED: "blended",
  MILK_TEA: "milk tea",
};

// Enumeration for sizes
const Size = {
  S: "S",
  M: "M",
  L: "L",
  XL: "XL",
};

// Enumeration for milk options
const MilkOption = {
  WHOLE_MILK: "whole milk",
  ALMOND_MILK: "almond milk",
};

// Enumeration for price adjustments
const PriceAdjustment = {
  BASE: 2,
  SIZE_M: 0.5,
  SIZE_L: 1,
  SIZE_XL: 1.5,
  BLENDED: 1,
  WHIPPED_CREAM: 0.5,
  MILK_OPTION: 0.5,
};

function calculatePrice3(drinkType, size, whippedCream, milkOption, chocolateSaucePumps) {
  let basePrice = PriceAdjustment.BASE;

  // Adjust base price for size
  switch (size) {
    case Size.M:
      basePrice += PriceAdjustment.SIZE_M;
      break;
    case Size.L:
      if (drinkType === DrinkType.COLD || drinkType === DrinkType.BLENDED) {
        basePrice += PriceAdjustment.SIZE_L;
      }
      break;
    case Size.XL:
      basePrice += PriceAdjustment.SIZE_XL;
      break;
  }

  // Adjust base price for drink type
  switch (drinkType) {
    case DrinkType.BLENDED:
      basePrice += PriceAdjustment.BLENDED;
      break;
    case DrinkType.MILK_TEA:
      basePrice += 2.25;
      break;
  }

  // Adjust base price for whipped cream topping
  if (whippedCream) {
    basePrice += PriceAdjustment.WHIPPED_CREAM;
  }

  // Adjust base price for milk options
  switch (milkOption) {
    case MilkOption.WHOLE_MILK:
    case MilkOption.ALMOND_MILK:
      basePrice += PriceAdjustment.MILK_OPTION;
      break;
  }

  // Adjust base price for chocolate sauce pumps
  if (drinkType === DrinkType.HOT && chocolateSaucePumps > 2) {
    const extraPumps = Math.min(chocolateSaucePumps - 2, 4);
    const extraPumpPrice = extraPumps * 0.5;
    basePrice += extraPumpPrice;
  }

  return basePrice;
}

console.log(calculatePrice3(DrinkType.HOT, Size.M, false, null, 0)); // Output: 2.5

console.log(calculatePrice3(DrinkType.HOT, Size.L, true, null, 3)); // Output: 3

console.log(calculatePrice3(DrinkType.COLD, Size.XL, false, MilkOption.WHOLE_MILK, 5)); // Output: 4

console.log(calculatePrice3(DrinkType.MILK_TEA, Size.S, true, MilkOption.ALMOND_MILK, 1)); // Output: 5.25

console.log(calculatePrice3(DrinkType.HOT, Size.XL, true, MilkOption.WHOLE_MILK, 6)); // Output: 6.5

console.log(calculatePrice3(DrinkType.HOT, Size.M, false, null, 4)); // Output: 3.5

console.log(calculatePrice3(DrinkType.HOT, Size.L, true, null, 7)); // Output: 4.5
