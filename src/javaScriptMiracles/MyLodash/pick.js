const data = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

const pick = (obj, ...keys) => {
    keys = keys.flat();
    const res = {};
    for(let key of keys){
        res[key] = obj[key];
    }
    return res;
}


console.log(pick(data, ["a", "c"]))
console.log(pick(data, "a", "c"))