const cv = require('opencv4nodejs');
const fs = require('fs');

const drawBlueRect = (image, rect, opts = {thickness: 2}) =>
    image.drawRectangle(
        rect,
        new cv.Vec(255, 0, 0),
        opts.thickness,
        cv.LINE_8
    );

const sortByNumDetections = result => result.numDetections
    .map((num, idx) => ({num, idx}))
    .sort(((n0, n1) => n1.num - n0.num))
    .map(({idx}) => idx);


function getCorrectOrientation(data) {

    let image = cv.imdecode(data);
    const faceClassifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_DEFAULT);

    let rotate90 = image.rotate(cv.ROTATE_90_CLOCKWISE);
    let rotate180 = rotate90.rotate(cv.ROTATE_90_CLOCKWISE);
    let rotate270 = rotate180.rotate(cv.ROTATE_90_CLOCKWISE);

    let faceResult = faceClassifier.detectMultiScale(image.bgrToGray());
    let rotate90Res = faceClassifier.detectMultiScale(rotate90.bgrToGray()); //90
    let rotate180Res = faceClassifier.detectMultiScale(rotate180.bgrToGray()); //180
    let rotate270Res = faceClassifier.detectMultiScale(rotate270.bgrToGray()); //270

    let orientationArray = [];
    faceResult.objects.forEach(r => orientationArray.push("0"));
    rotate90Res.objects.forEach(r => orientationArray.push("90"));
    rotate180Res.objects.forEach(r => orientationArray.push("180"));
    rotate270Res.objects.forEach(r => orientationArray.push("270"));

    faceResult.objects = faceResult.objects.concat(rotate90Res.objects);
    faceResult.numDetections = faceResult.numDetections.concat(rotate90Res.numDetections);

    faceResult.objects = faceResult.objects.concat(rotate180Res.objects);
    faceResult.numDetections = faceResult.numDetections.concat(rotate180Res.numDetections);

    faceResult.objects = faceResult.objects.concat(rotate270Res.objects);
    faceResult.numDetections = faceResult.numDetections.concat(rotate270Res.numDetections);

    // sort by confidence
    const faceRect = faceResult.objects[sortByNumDetections(faceResult)[0]];
    const bestConfidenceIndex = faceResult.objects.indexOf(faceRect);

    let correctImageOrientation = orientationArray[bestConfidenceIndex];

    console.log(faceResult.numDetections);
    console.log("Best confidence: "+faceResult.numDetections[bestConfidenceIndex]);

    if (correctImageOrientation == "90") {
        image = rotate90
    }
    else if (correctImageOrientation == "180") {
        image = rotate180
    }
    else if (correctImageOrientation == "270") {
        image = rotate270
    }
    // draw face detection
    drawBlueRect(image, faceRect);

    //cv.imwrite('/Users/srujan.gopu/IdeaProjects/javascriptMiracles/result/' + fileName, image);
    let imgData = cv.imencode('.png', image).toString('base64');
    return Buffer.from(imgData, 'base64');
}

let fileName = "atest4.png";

//let image = cv.imread('/Users/srujan.gopu/IdeaProjects/javascriptMiracles/data/' + fileName);
//getCorrectOrientation(image);

fs.readFile('/Users/srujan.gopu/IdeaProjects/javascriptMiracles/data/' +fileName, function(err, data) {

    fs.writeFile('/Users/srujan.gopu/IdeaProjects/javascriptMiracles/result/' + fileName, getCorrectOrientation(data), function(err, data) {});
});



