//Set is a list of unique values without any duplicates
class MySet {
    constructor() {
        this.list = [];
    }
    add = (value) => {
        if(!this.list.includes(value)){
            this.list.push(value);
        }
    }
    has = (value) => this.list.includes(value)
    delete = (value) => {
        const index = this.list.indexOf(value);
        if (index > -1) {
            this.list.splice(index, 1);
        }
    }
    toString = () => console.log(this.list)
}

const setExample = new MySet();
setExample.add(10);
setExample.add(20);
setExample.add(30);
setExample.add(10);
setExample.delete(20);
setExample.toString()

/*
new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
 */