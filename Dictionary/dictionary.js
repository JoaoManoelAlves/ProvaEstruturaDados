class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

class Dicionario {
  constructor() {
    this.table = {};
  }

  // Verifica se a chave existe
  hasKey(key) {
    return Object.prototype.hasOwnProperty.call(this.table, key);
  }

  // Adiciona ou atualiza um elemento
  set(key, value) {
    if (key != null && value != null) {
      this.table[key] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  // Remove um elemento pela chave
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[key];
      return true;
    }
    return false;
  }

  // Retorna um valor específico
  get(key) {
    const valuePair = this.table[key];
    return valuePair == null ? undefined : valuePair.value;
  }

  // Limpa o dicionário
  clear() {
    this.table = {};
  }

  // Retorna a quantidade de itens
  size() {
    return Object.keys(this.table).length;
  }

  // Verifica se está vazio
  isEmpty() {
    return this.size() === 0;
  }

  // Retorna array com todas as chaves
  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }

  // Retorna array com todos os valores
  values() {
    return this.keyValues().map(valuePair => valuePair.value);
  }

  // Retorna array com todos os pares [chave, valor]
  keyValues() {
    return Object.values(this.table);
  }

  // Itera pelos valores, permitindo interrupção se retornar false
  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
}

