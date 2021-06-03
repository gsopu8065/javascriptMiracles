const data = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

const omit = (obj, keys) => {
    const res = {};
    for(let key in obj){
        if(!keys.includes(key)){
            res[key] = obj[key];
        }
    }
    return res;
}


console.log(omit(data, ["a", "c"]))
