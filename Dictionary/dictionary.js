function defaultToString(item) {
    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
return item.toString();
}

//Classe que guarda a chave e valor
class ValuePair{
    constructor(key, value){
        this.key = key
        this.value = value
    }
    toString(){
        return `[#${this.key} : ${this.value}]`
    }
}

//Classe dicionário
class Dictionary{
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn
        this.table = {}
    }
    //Inserir valores com chave e seu respectivo valor
    set(key,value){
        if(key != null && value != null){
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(key,value)
            return true
        }
        return false
    }
    remove(key){}

  
    hasKey(key){
        return this.table[this.toStrFn(key)] != null
    }
    get(key){}
    clear(){}
    size(){}
    isEmpty(){}
    keys(){}
    values(){}
    keyValues(){}
    forEach(callbackFn){}
}

const dict = new Dictionary
dict.set(1,2)
dict.set(2,2)
console.log(dict)
