

//Set são listas que apresentam pares de chave e valor, porém sem valores repetidos
module.exports = class ListaSet {
    constructor() {
        this.lista = {};
        this.count = 0;
    }
    //Verifica se ja existe um par de chave e valor no set
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.lista, element);
    }
    //Adicionar uma chave e valor
    add(element) {
        if (!this.has(element)) {
            this.lista[element] = element;
            this.count++;
            return true;

        }
        return false;
    }

    // Remove um elemento do conjunto
    delete(element){
        if(this.has(element)){
            delete this.lista[element]
            this.count--
            return true

        }
        return false;
    }

    // Retorna um novo Set contendo todos os elementos
    union(anotherSet){
        const unionSet = new Set()
        //Para cada valor do set, vai ser colocado no unionSet
        this.values().forEach(value => unionSet.add(value));
        anotherSet.values().forEach(value => unionSet.add(value)); //o método add ignora valores repetidos
        return unionSet;
    }
    //O que eles tem em comum?
    intersection(anotherSet) {
        const intersectionSet = new ListaSet();
        this.values().forEach(value => {
            if (anotherSet.has(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }
    //O que um tem que o outro não tem?
    difference(anotherSet) {
        const differenceSet = new ListaSet();
        this.values().forEach(value => {
            if (!anotherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }
    //O conjunto existe dentro do outro conjunto?
    isSubsetOf(anotherSet) {
        if (this.size() > anotherSet.size()) return false;
        let isSubset = true;
        this.values().every(value => {
            if (!anotherSet.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count == 0;
    }
    clear() {
        this.lista = {};
        this.count = 0;
    }
    //Valores dos sets
    values() {
        return Object.values(this.lista);
    }
};
