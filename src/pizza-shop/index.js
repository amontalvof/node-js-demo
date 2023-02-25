const PizzaShop = require('./PizzaShop');
const DrinkMachine = require('./DrinkMachine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('order-pizza', (size, topping) => {
    console.log(`Order received. Baking a ${size} pizza with ${topping}...`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order('large', 'extra cheese');
pizzaShop.displayOrderNumber();
