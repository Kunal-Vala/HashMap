class HashSet{
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

    set(key) {
        const index = this.hash(key);
        const bs = this.bucket[index]
        if (index < 0 || index >= this.bucket.length) {
            throw new Error("Trying to access index out of bounds");
        }

        for (let item of bs) {
            if (item === key) {
                return
            };
        };

        bs.push(key);
        this.size++;
        if (this.size >= this.capacity * this.loadFactor) {
            this.resize();
        }
    }

    get(key) {
        const index = this.hash(key);
        const bs = this.bucket[index];

        for (let item of bs) {
            if (item === key) {
                return item;
            }
        }

        return null;
    }


    has(key) {
        const index = this.hash(key);
        const bs = this.bucket[index]

        for (let item of bs) {
            if (item === key) {
                return true
            }
        };
        return false
    }

    resize() {
        let newCapacity = this.capacity * 2;
        let tempBucket = this.bucket;
        this.bucket = new Array(newCapacity).fill(null).map(() => []);
        this.capacity = newCapacity
        this.size = 0;

        for (let bs of tempBucket) {
            for (let item of bs) {
                if (item) {
                    this.set(item)
                }
            }
        }
    }

    remove(key) {
        let index = this.hash(key);
        let bs = this.bucket[index];

        for (let i = 0; i < bs.length; i++) {
            if (bs[i] === key) {
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
            for (let key of bs) {
                keys.push(key)
            }
        }

        return keys
    }

    getCurrentLoadFactor() {
        return this.size / this.capacity;
    }
}

export {HashSet}