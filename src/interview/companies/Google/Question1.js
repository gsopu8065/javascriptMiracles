function replace(str) {
    const i = str.indexOf('?');
    if (i > -1) {
        return replace(str.replace('?', '0')).concat(replace(str.replace('?', '1')))
    }
    return [str];
}
console.log(replace("1?0?"));