var urls  = ["1", "2", "3", "4", "5" ];


function myfetch(i) {
    return new Promise((resolve,reject) => {
        console.log("Calling ", i)

        if(i === "1"){
            setTimeout(()=>resolve("solved 1"), 5000);
        }
        else if(i === "2"){
            setTimeout(()=>resolve("solved 2"), 1000);
        }
        else if(i === "3"){
            setTimeout(()=>resolve("solved 3"), 3000);
        }
        else if(i === "4"){
            setTimeout(()=>resolve("solved 4"), 6000);
        }
        else if(i === "5"){
            setTimeout(()=>resolve("solved 5"), 7000);
        }
        else{
            reject("error")
        }

    });
}


async function chain(p1, p2) {

    return new Promise((resolve, reject) => {

        var temp = new Promise((resolve2, reject2) => {
            p1.then((res) => {
                resolve(res);
            }).catch((err) => {
                console.log("p1", err);
                reject2(err);
            });
        });


        p2.then(async (res) => {
            var temp2 = await temp;
            if(!temp2){
                resolve(res);
            }
        }).catch((err) => {
            reject(err)
        });

    });
}

var first = new Promise((resolve, reject) => reject("error"));

for(var i=0;i<urls.length;i++){
    var second = myfetch(urls[i]);
    first = chain(first, second);
}

first.then((res) => {
    console.log(res);
}).catch((err) => console.log(err));