class HashTable {
  constructor(size) {
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.numBuckets;
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) this.buckets[index] = [];

    this.buckets[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return null;
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        return this.buckets[index][i][1];
      }
    }
  }
}

const hashTable = new HashTable();

hashTable.insert('johndoe', {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@gmail.com',
});

hashTable.insert('janedoe', {
  name: 'Jane Doe',
  age: 28,
  email: 'janedoe@gmail.com',
});

hashTable.insert('arielmenendez', {
  name: 'Ariel Menéndez',
  age: 33,
  email: 'arielmenendez19@gmail.com',
});

console.log(hashTable.get('arielmenendez'));
