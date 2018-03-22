function imageInformation(){
    var x = document.getElementById("image-input");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Select one or more files.";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                txt += "<br><strong>" + (i+1) + ". file</strong><br>";
                var file = x.files[i];
                if ('name' in file) {
                    txt += "name: " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "size: " + file.size + " bytes <br>";
                }
            }
        }
    }
    else {
        if (x.value == "") {
            txt += "Select one or more files.";
        } else {
            txt += "The files property is not supported by your browser!";
            txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead.
        }
    };
    document.getElementById("file").innerHTML = txt;
};

function getAverageRGB(imgEl) {

    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */
        return defaultRGB;
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    return rgb;

}

papertype.addEventListener('click', rgbDisplay);
papertype.addEventListener('mouseover', rgbDisplay);
papertype.addEventListener('mouseout', rgbDisplay);
defaultsize.addEventListener('mouseover', rgbDisplay);
defaultsize.addEventListener('mouseout', rgbDisplay);
defaultsize.addEventListener('click', rgbDisplay);
stickerwidth.addEventListener('click', rgbDisplay);
stickerheight.addEventListener('click', rgbDisplay);

function rgbDisplay() {
  var image = document.getElementById('image-preview');
  var dimensions = document.getElementById('heightwidth');
  var display = document.getElementById('percent-ink');
  var text = "";
  display.innerHTML = "";
  dimensions.innerHTML = "";
  var rgb = getAverageRGB(image);
  var txt = "";
  txt = 'r: ' + rgb.r + ', g: ' + rgb.g + ', b: ' + rgb.b + " <br>";
  var combined = rgb.r + rgb.g + rgb.b;
  var average = combined / 3;
  var percentwhite = combined / 765;
  var percentblack = 1 - percentwhite;
  var percentaverage = average / 255;
  var averageinverse = 1 - percentaverage;
  var final = averageinverse * 100;
  txt += '% White: ' + percentwhite + ', % Black: ' + percentblack + ' <br>';
  txt += 'Average RGB Value: ' + average + ', Average RGB %: ' + percentaverage + ' <br>';
  txt += '<b>Average Reverse RGB Value</b>: ' + averageinverse + ' <br>';
  txt += 'h: ' + image.height + ', w: ' + image.width;
  text = "Percent Ink: " + final.toFixed(1);
  dimensions.innerHTML = txt;
  display.innerHTML = text;
};
