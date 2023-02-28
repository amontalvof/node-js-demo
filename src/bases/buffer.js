const buffer = new Buffer.from('Lorem');

buffer.write('Code');

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
