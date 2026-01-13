const ValuePair = require('./valuePair')
function defaultToString(item) {
    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString(); // {1}
}

module.exports=class HashTable{
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn
        this.table = {}
    }
    //Uma função que transforma a chave em uma soma no padrão ASCIII para encontrar seu respectivo valor
    loseloseHashCode(key){
        if(typeof key === 'number'){
            return key
        }
        const tablekey = this.toStrFn(key)
        let hash = 0
        for(let i=0; i<tablekey.length;i++){
            hash += tablekey.charCodeAt(i)
        }
        return hash % 37
    }
    //Devolve a key passada pela loseloseHashCode
    hashCode(key){
        return this.loseloseHashCode(key)
    }

    put(key, value){
        if(key !== null && value !== null) {
            const position = this.hashCode(key)
            this.table[position] = new ValuePair(key, value)
            return true
        }
        return false
    }
    remove(key){
        const hash = this.hashCode(key)
        const valuePair = this.table[hash]
        if(valuePair != null){
            delete this.table[hash]
            return true
        }
        return false
    }
    get(key){
        const valuePair = this.table[this.hashCode(key)]
        if(valuePair === undefined){
            return undefined
        }
        else{
            return valuePair.value
        }
    }
}
