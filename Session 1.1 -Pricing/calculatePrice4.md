
Code Explanation - Breakfast Item Price Calculation

The provided code calculates the price of a breakfast item based on its type, sandwich type (if applicable), and bagel topping (if applicable). Let's explain the code:

Enumerations

1. BreakfastItem represents the different types of breakfast items available, such as sandwiches and bagels.
2. SandwichType represents the different types of sandwich options available, such as egg and turkey.
3. BagelTopping represents the different topping options available for bagels, such as butter and cream cheese.

Function: calculatePrice4(itemType, sandwichType, bagelTopping)

1.The calculatePrice4 function takes three parameters: itemType (representing the type of breakfast item), sandwichType (representing the type of sandwich, applicable only if the item is a sandwich), and bagelTopping (representing the chosen topping for a bagel, applicable only if the item is a bagel).

2. The function initializes the basePrice variable with the value 3.

3. It checks the itemType using an if-else statement. If the item type is a sandwich, it enters the if block and checks the sandwichType using a switch statement.

4. If the sandwichType is either SandwichType.EGG or SandwichType.TURKEY, it adds 1 to the basePrice.
5. If the itemType is not a sandwich, it enters the else if block and checks if it is a bagel. If so, it checks the bagelTopping using a switch statement.

6. If the bagelTopping is either BagelTopping.BUTTER or BagelTopping.CREAM_CHEESE, it adds 0.5 to the basePrice.
7. Finally, the function returns the final calculated basePrice, representing the total price of the breakfast item based on its type and any additional options (sandwich type or bagel topping).