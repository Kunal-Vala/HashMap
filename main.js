import { HashMap } from "./HashMap.js"
import { HashSet } from "./HashSet.js";

const test = new HashMap()
console.log('********************************HASHMAP***************************************');

test.set('apple', 'red')
test.set('banana', 'yellow')
console.log(test.getCurrentLoadFactor())
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test.getCurrentLoadFactor())

console.log(test.get('apple'));      // Expected: 'red'
console.log(test.get('banana'));     // Expected: 'yellow'
console.log(test.get('unknown'));    // Expected: null

test.has('carrot');                  // Console: FOUND → true
test.has('mango');                   // Console: NOT FOUND → false


console.log(test.remove('dog'));     // Expected: true
console.log(test.get('dog'));        // Expected: null
console.log(test.remove('zebra'));   // Expected: false

console.log(test.length());          // Should reflect current number of key-value pairs (after any removals)

test.clear();
console.log(test.length());          // Expected: 0
console.log(test.get('apple'));      // Expected: null

test.set('xylophone', 'musical');
test.set('yak', 'hairy');
console.log(test.keys());            // Expected: ['xylophone', 'yak']

console.log(test.values());          // Expected: ['musical', 'hairy']

console.log(test.entries());         // Expected: [['xylophone', 'musical'], ['yak', 'hairy']]
console.log(test.getCurrentLoadFactor())

for (let i = 0; i < 100; i++) {
    test.set(`key${i}`, `value${i}`);
}
console.log(test.length());          // Expected: 100+ (depending on how many you added)
console.log(test.get('key57'));      // Make sure it's retrievable after resize

console.log(test.getCurrentLoadFactor())

console.log('********************************HASHMAP***************************************');


console.log('********************************HASHSET***************************************');

const set = new HashSet();
console.log("Load Factor:", set.getCurrentLoadFactor());

set.set('apple');
set.set('banana');
set.set('carrot');

console.log(set.get('apple'));     // Expected: 'apple'
console.log(set.get('banana'));    // Expected: 'banana'
console.log(set.get('grape'));     // Expected: null

set.has('carrot');                 // Console: FOUND → true
set.has('zebra');                  // Console: NOT FOUND → false

console.log(set.remove('banana'));  // Expected: true
console.log(set.has('banana'));     // Expected: false
console.log(set.length());          // Should be 2

set.clear();
console.log(set.length());          // Expected: 0
console.log(set.get('apple'));      // Expected: null


for (let i = 0; i < 100; i++) {
    set.set(`item${i}`);
}
console.log(set.length());          // Expected: 100
console.log(set.get('item50'));     // Expected: 'item50'

console.log(set.keys());           // Expected: Array of inserted items


console.log("Load Factor:", set.getCurrentLoadFactor());







console.log('********************************HASHSET***************************************');
