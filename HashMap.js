class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.size = 0;
        this.bucket = new Array(this.capacity).fill(null).map(() => []);
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }

        return (hashCode % this.capacity);
    }

    set(key, value) {
        const index = this.hash(key);
        const bs = this.bucket[index]
        if (index < 0 || index >= this.bucket.length) {
            throw new Error("Trying to access index out of bounds");
        }

        for (let pair of bs) {
            if (pair[0] === key) {
                pair[1] = value;
                return
            };
        };

        bs.push([key, value]);
        this.size++;
        if (this.size >= this.capacity * this.loadFactor) {
            this.resize();
        }
    }

    get(key) {
        const index = this.hash(key);
        const bs = this.bucket[index];

        for (let pair of bs) {
            if (pair[0] === key) {
                return pair[1];
            }
        }

        return null;
    }


    has(key) {
        const index = this.hash(key);
        const bs = this.bucket[index]

        for (let pair of bs) {
            if (pair[0] === key) {
                console.log('FOUND');
                return true
            }
        };
        console.log('NOT FOUND');
        return false
    }

    resize() {
        let newCapacity = this.capacity * 2;
        let tempBucket = this.bucket;
        this.bucket = new Array(newCapacity).fill(null).map(() => []);
        this.capacity = newCapacity
        this.size = 0;

        for (let pair of tempBucket) {
            for (let item of pair) {
                if (item) {
                    this.set(item[0], item[1])
                }
            }
        }
    }

    remove(key) {
        let index = this.hash(key);
        let bs = this.bucket[index];

        for (let i = 0; i < bs.length; i++) {
            if (bs[i][0] === key) {
                bs.splice(i, 1)
                this.size--
                return true
            }
        }
        return false
    }

    length() {
        return this.size
    }

    clear() {
        this.bucket = new Array(this.capacity).fill(null).map(() => [])
        this.size = 0;
    }

    keys() {
        let keys = []
        for (let bs of this.bucket) {
            for (let [key, value] of bs) {
                keys.push(key)
            }
        }

        return keys
    }

    values() {
        let values = []
        for (let bs of this.bucket) {
            for (let [key, value] of bs) {
                values.push(value)
            }
        }

        return values
    }

    entries() {
        let entries = [];

        for (let bs of this.bucket) {
            for (let [key, value] of bs) {
                entries.push([key, value])
            }
        }

        return entries
    }

    getCurrentLoadFactor() {
        return this.size / this.capacity;
    }
}   

export { HashMap }