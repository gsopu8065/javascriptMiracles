//ascending order
function sort1(a) {
    a.sort((a,b) => (typeof a == 'string') ? a.localeCompare(b) : a-b);
}

let a = [20, 20, 30, 30, 45, 36];
sort1(a);
console.log(a);

let x = ["hi", "raj", "hi", "kk", "raj"];
sort1(x);
console.log(x);

//decending order
function sort2(a) {
    a.sort((a,b) => (typeof a == 'string') ? b.localeCompare(a) : b-a);
}

sort2(a);
console.log(a);

sort2(x);
console.log(x);


//lexicographical order (alphabets first and numbers last
function lexicographical(a) {
    a.sort((a,b) => {
        let res = 0;
        a.split('').map((e,i) => {
            if(b[i] && res == 0){
                if(isNaN(e) && !isNaN(b[i])){
                    res--;
                }
                else if(!isNaN(e) && isNaN(b[i])){
                    res++;
                }
                else if(isNaN(e) && isNaN(b[i]))
                {
                    res = e.localeCompare(b[i]);
                }
                else {
                    res = e - b[i];
                }
            }
        });
        return res;
    });
}

let p = ["x24", "x45", "xy4", "xyz"];
lexicographical(p);
console.log(p);
