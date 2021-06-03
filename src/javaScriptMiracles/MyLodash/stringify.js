function stringify(value) {
    const lastKey = Object.keys(value).pop();
    let objString = '';
    if (typeof value === 'object') {
        // We add the first curly brace
        objString += '{';
        for (const key in value) {
            objString += `"${key}":${stringify(value[key])}`;

            // We add the comma
            if (key !== lastKey) {
                objString += ',';
            }
        }
        // We add the last curly brace
        objString += '}';
    } else if (typeof value === 'string') {
        objString += `"${value}"`;
    } else if (typeof value === 'number') {
        objString += `${value}`;
    }
    return objString;
}

const sampleObj = {
    "name": "Juan",
    "age": 29,
    "address": {
        "street": "Street 1",
        "number": 3
    }
}
console.log(stringify(sampleObj));
console.log(JSON.stringify(sampleObj));