function greet(name) {
    console.log(`Hello ${name}!`);
}

function higherOrderFunction(callback) {
    const name = 'Andy';
    callback(name);
}

higherOrderFunction(greet);
