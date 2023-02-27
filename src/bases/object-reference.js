const obj1 = {
    name: 'Bruce Wayne',
};

let obj2 = obj1;
// eslint-disable-next-line no-unused-vars
obj2 = { name: 'Clark Kent' };

console.log(obj1);
