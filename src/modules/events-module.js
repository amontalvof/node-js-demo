const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on('order-pizza', (size, topping) => {
    console.log(`Order received. Baking a ${size} pizza with ${topping}...`);
});

emitter.on('order-pizza', (size) => {
    if (size === 'large') {
        console.log(`Serving complimentary soda`);
    }
});

console.log('Other code here');

emitter.emit('order-pizza', 'large', 'extra cheese');
