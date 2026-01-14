const Dictionary = require('./dictionary');

const dict = new Dictionary();
dict.set(1, 2);
dict.set(5, 2);
dict.set(3, 19);
dict.set(4, 20);
dict.set(2, 20);
console.log(dict);
console.log(dict.toString());