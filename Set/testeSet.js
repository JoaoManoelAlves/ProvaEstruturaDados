
const ListaSet = require('./Set.js');

const SetA = new ListaSet();
SetA.add(1);
SetA.add(2);
SetA.add(3);

const SetB = new ListaSet();
SetB.add(3);
SetB.add(4);
SetB.add(5);

console.log(SetA.union(SetB));
console.log(SetA.intersection(SetB));
console.log(SetA.difference(SetB));
console.log(SetA.isSubsetOf(SetB));