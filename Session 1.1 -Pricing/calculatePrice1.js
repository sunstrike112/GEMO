// Enumeration for drink types
const DrinkType = {
  HOT: "hot",
  COLD: "cold",
  BLENDED: "blended",
};

// Enumeration for sizes
const Size = {
  S: "S",
  M: "M",
  L: "L",
};

// Enumeration for price adjustments
const PriceAdjustment = {
  BASE: 2,
  SIZE_M: 0.5,
  SIZE_L: 1,
  BLENDED: 1,
  WHIPPED_CREAM: 0.5,
};

function calculatePrice1(drinkType, size, whippedCream) {
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
  }

  // Adjust base price for drink type
  switch (drinkType) {
    case DrinkType.BLENDED:
      basePrice += PriceAdjustment.BLENDED;
      break;
  }

  // Adjust base price for whipped cream topping
  if (whippedCream) {
    basePrice += PriceAdjustment.WHIPPED_CREAM;
  }

  return basePrice;
}


// Example usage
console.log(calculatePrice1(DrinkType.HOT, Size.S, false));       
console.log(calculatePrice1(DrinkType.COLD, Size.S, true));       
console.log(calculatePrice1(DrinkType.BLENDED, Size.S, true));    
console.log(calculatePrice1(DrinkType.HOT, Size.M, false));       
console.log(calculatePrice1(DrinkType.COLD, Size.M, false));      
console.log(calculatePrice1(DrinkType.BLENDED, Size.M, true));    
console.log(calculatePrice1(DrinkType.HOT, Size.L, true));        
console.log(calculatePrice1(DrinkType.COLD, Size.L, false));      
console.log(calculatePrice1(DrinkType.BLENDED, Size.L, true));    
