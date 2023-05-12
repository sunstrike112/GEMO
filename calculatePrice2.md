Code Explanation - Extended Drink Price Calculation 2

This code extends the previous drink price based on calculation1 code by introducing additional enumerations and a modified function to calculate the price of a coffee order. Let's explain each part of the code:

1. The DrinkType enumeration is extended to include a new value, "milk tea", representing a specific type of drink.
2. The Size enumeration is extended to include an additional value, "XL" (extra-large), to provide more size options.
3. The MilkOption enumeration is introduced to represent different milk options that can be added to the drink.


The calculatePrice2 function extends the previous calculation code to accommodate the new enumerations and milk options.

1. It takes four parameters: drinkType (representing the type of drink), size (representing the size of the drink), whippedCream (a boolean indicating whether whipped cream is added as a topping), and milkOption (representing the milk option chosen for the drink).
2. The function begins by initializing the basePrice variable with the value of PriceAdjustment.BASE, which is 2.
3. It adjusts the base price based on the size of the drink using a switch statement. If the size is "M" (medium), it adds the value of PriceAdjustment.SIZE_M (0.5) to the base price. If the size is "L" (large) and the drink type is either "cold" or "blended", it adds the value of PriceAdjustment.SIZE_L (1) to the base price. For the new size "XL" (extra-large), it adds the value of PriceAdjustment.SIZE_XL (1.5) to the base price.
4. The base price is further adjusted based on the drink type. If the drink type is "blended", it adds the value of PriceAdjustment.BLENDED (1) to the base price. For the new drink type "milk tea", it adds a fixed price of 2.25.
5. The base price is adjusted for the whipped cream topping by adding the value of PriceAdjustment.WHIPPED_CREAM (0.5) to the base price if whippedCream is true.
6. The base price is adjusted for the chosen milk option using a switch statement. If the milkOption is either MilkOption.WHOLE_MILK or MilkOption.ALMOND_MILK, it adds the value of PriceAdjustment.MILK_OPTION (0.5) to the base price.
7. Finally, the function returns the final calculated basePrice, representing the total price of the drink considering its type, size, toppings, and milk option.