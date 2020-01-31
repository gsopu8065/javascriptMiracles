let async = require("async");
let list = [
    {"message": "Hello1"},
    {"message": "Hello2"},
    {"message": "Hello3"},
    {"message": "Hello4"},
    {"message": "Hello5"},
    {"message": "Hello6"},
    {"message": "Hello7"},
    {"message": "Hello8"},
    {"message": "Hello9"},
    {"message": "Hello10"},
    {"message": "Hello21"},
    {"message": "Hello12"},
    {"message": "Hello13"},
    {"message": "Hello14"},
    {"message": "Hello15"},
    {"message": "Hello16"},
    {"message": "Hello17"},
    {"message": "Hello18"},
    {"message": "Hello19"},
    {"message": "Hello20"}
];
let parallelCount =5;

//without promises
function run(event, callback) {
    console.log("running.."+event.message);
    setTimeout(()=>callback(event), Math.floor(Math.random() * 10)*1000);
}

async.mapLimit(list, parallelCount, async function(m) {
    return await new Promise((resolve, reject) => run(m, (event) => {
        console.log("Done "+event.message);
        resolve(event)
    }));
}, (err, results) => console.log(" ALL Done"));



//with promises
function run2(event) {
    return new Promise((resolve, reject) =>  {
        console.log("running.."+event.message);
        setTimeout(()=>resolve(event), Math.floor(Math.random() * 10)*1000);
    });
}

async.mapLimit(list, parallelCount, async function(m) {
    let res = await run2(m);
    console.log("done "+res.message);
    return res;
}, (err, results) => console.log(" ALL Done"));