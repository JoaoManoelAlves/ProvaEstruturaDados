const HashTable = require('./hashtable.js');

const hash = new HashTable;
hash.put('Bruno', 'bruno@email.com');
hash.put('João', 'joao@email.com');
hash.put('Ester', 'ester@email.com');
hash.put('Andre', 'andre@email.com');
console.log(hash.hashCode('Bruno') + ' - Bruno');
console.log(hash.hashCode('Joao') + ' - Joao');
console.log(hash.hashCode('Ester') + ' - Ester');
console.log(hash.hashCode('Andre') + ' - Andre');

console.log(hash.get('Ester')); // Saida: ester@email.com
