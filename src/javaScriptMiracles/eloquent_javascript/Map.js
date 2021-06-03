//map is a key and value set. Its a json
class MyMap {
    constructor() {
        this.map = {};
    }
    put = (key, value) => this.map[key] = value;
    get = (key) => this.map[key];
    toString = () => {
        for(let key in this.map){
            console.log(`${key} = ${this.map[key]}`)
        }
    }
}
const mapExample = new MyMap();
mapExample.put('a', 10);
mapExample.put('b', 20);
mapExample.put('c', 30);
mapExample.toString()

/*
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
 */