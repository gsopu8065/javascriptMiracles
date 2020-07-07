function replace(str, list) {

    if (str.indexOf('?') > -1) {
        replace(str.replace('?', '0'), list);
        replace(str.replace('?', '1'), list);
    }
    else {
        list.push(str);
    }
}
var list = [];
replace("1?0???", list);
console.log(list);