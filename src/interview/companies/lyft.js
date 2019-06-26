var fs = require('fs');
let firstLine = true;
let inputMap = {};

fs.readFile('/Users/srujan.gopu/IdeaProjects/javascriptMiracles/input/input1.txt', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    readMap(data.split('\n'));
});

function readMap(lines) {
    lines.forEach(line => {
        if(firstLine){
            firstLine = false;
        }
        else{
            let words = line.split(' ');
            if(words[1])
             inputMap[words[0]] = words[1];
        }
    });
    process(inputMap);
}

let result = [];
function process(inputMap) {
    let allKeys = Object.keys(inputMap).sort();
    allKeys.forEach((eachKey, index) => {
        let workerId = checkWorkers(parseInt(eachKey), parseInt(inputMap[eachKey]));
        console.log("J"+index+" W"+workerId);
    });
    console.log(result.length);
}

//return index of smaller number in the array
function checkWorkers(startTime, duration) {
    let time = getTime(startTime, duration);
    let minTime = Math.min.apply(null, result);

    if(isFinite(minTime) && minTime <= startTime){
        let minIndex = result.indexOf(minTime);
        result[minIndex] = time;
        return minIndex;
    }
    else{
        result.push(time);
        return result.length-1;
    }
}


//formats the time
function getTime(startTime, duration) {
    let time = startTime+duration+1;
    let hours = Math.floor(time/60);
    let minutes = time%60;
    return (hours*100)+minutes;
}