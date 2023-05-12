Code Explanation - Extended Drink Price Calculation 3

This code further extends the drink price calculation2 code by introducing a new parameter for chocolate sauce pumps and modifying the calculation logic accordingly. Let's explain the additions and modifications:

Enumerations
The enumerations remain the same as in the previous explanation in calculatePrice2.md

Function: calculatePrice3(drinkType, size, whippedCream, milkOption, chocolateSaucePumps)
The calculatePrice3 function expands the previous calculation code by incorporating the new parameter chocolateSaucePumps.

1. It takes five parameters: drinkType (representing the type of drink), size (representing the size of the drink), whippedCream (a boolean indicating whether whipped cream is added as a topping), milkOption (representing the milk option chosen for the drink), and chocolateSaucePumps (representing the number of chocolate sauce pumps added to the drink).

2. The function begins by initializing the basePrice variable with the value of PriceAdjustment.BASE, which is 2.

3. It adjusts the base price based on the size of the drink using a switch statement. If the size is "M" (medium), it adds the value of PriceAdjustment.SIZE_M (0.5) to the base price. If the size is "L" (large) and the drink type is either "cold" or "blended", it adds the value of PriceAdjustment.SIZE_L (1) to the base price. For the new size "XL" (extra-large), it adds the value of PriceAdjustment.SIZE_XL (1.5) to the base price.

4. The base price is further adjusted based on the drink type. If the drink type is "blended", it adds the value of PriceAdjustment.BLENDED (1) to the base price. For the new drink type "milk tea", it adds a fixed price of 2.25.

5. The base price is adjusted for the whipped cream topping by adding the value of PriceAdjustment.WHIPPED_CREAM (0.5) to the base price if whippedCream is true.

6. The base price is adjusted for the chosen milk option using a switch statement. If the milkOption is either MilkOption.WHOLE_MILK or MilkOption.ALMOND_MILK, it adds the value of PriceAdjustment.MILK_OPTION (0.5) to the base price.

7. The base price is further adjusted based on the number of chocolate sauce pumps if the drink type is "hot". If the chocolateSaucePumps parameter is greater than 2, the code calculates the additional pumps beyond 2 and adds their respective prices to the base price. Each extra pump is priced at 0.5, and a maximum of 4 extra pumps are accounted for.

8. Finally, the function returns the final calculated basePrice, representing the total price of the drink considering its type, size, toppings, milk option, and chocolate sauce pumps.