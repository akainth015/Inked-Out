var stickerheight = document.getElementById('orderheight');
var stickerwidth = document.getElementById('orderwidth');
var defaultlabel = document.getElementById('sizelabel')
var defaultsize = document.getElementById('size');
var papertype = document.getElementById('paper');
var price = document.getElementById('price');
var image = document.getElementById('image-preview');
var percentink = document.getElementById('percent-ink');


papertype.addEventListener('click', pricing);
papertype.addEventListener('mouseover', pricing);
papertype.addEventListener('mouseout', pricing);
defaultsize.addEventListener('mouseover', pricing);
defaultsize.addEventListener('mouseout', pricing);
defaultsize.addEventListener('click', pricing);
stickerwidth.addEventListener('click', pricing);
stickerheight.addEventListener('click', pricing);

function calculator(height, width, type, color, percent) {
  var rpc = 15.56/32400.0;
  var bpc = 13.92/32400.0;
  var gpc = 57.35/21600.0;
  var gapc = (185.3/2.0)/32400.0;
  var vpc = 152.4/10800.0;

  var bic = (4.0/6.0)*(0.5 * 2.84952/144.0);
  var cic = (4.0/6.0)*(2.84952/144.0);

  var height = height;
  var width = width;
  var area = height * width;
  var ink_percentage = percent/100.0;

  var paper_type = type;
  var i = 0;
  var p = 0;

  if (paper_type == 'regular') {
    p = area * rpc;
  } else if (paper_type == 'bond') {
    p = area * bpc;
  } else if (paper_type == 'gloss') {
    p = area * gpc;
  } else if (paper_type == 'sticker') {
    p = area * gapc;
  } else if (paper_type == 'vinyl') {
    p = area * vpc;
  } else {

  };

  var ink_type = color;

  if (ink_type == 'black') {
    i = bic * area * ink_percentage;
  } else {
    i = cic * area * ink_percentage;
  };

  var x = i + p;
  var f = x * 1.25;
  return f;


};

function pricing() {
  var vpapertype = papertype.options[papertype.selectedIndex].value;
  var size = defaultsize.options[defaultsize.selectedIndex].value;
  var ink = percentink.innerHTML.slice(13, 20);

if (vpapertype == 'regular') {
  estimatedPrice = calculator(stickerheight.value, stickerwidth.value, vpapertype,'color', ink);
  estimatedPrice = estimatedPrice.toFixed(2);
  price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'bond') {
estimatedPrice = calculator(stickerheight.value, stickerwidth.value, vpapertype,'color', ink);
estimatedPrice = estimatedPrice.toFixed(2);
price.textContent = 'Estimated Price: ' + estimatedPrice;
};


if (vpapertype == 'vinyl-adhesive') {
estimatedPrice = calculator(stickerheight.value, stickerwidth.value, vpapertype,'color', ink);
estimatedPrice = estimatedPrice.toFixed(2);
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'glossy') {
estimatedPrice = calculator(stickerheight.value, stickerwidth.value, vpapertype,'color', ink);
estimatedPrice = estimatedPrice.toFixed(2);
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (papertype.options[papertype.selectedIndex].value == 'sticker') {
 var area = stickerheight.value * stickerwidth.value;
 if (area < 3) {
   var estimatedPrice = calculator(stickerheight.value, stickerwidth.value, vpapertype,'color', ink);
   price.textContent = 'Estimated Price: ' + '$' + estimatedPrice.toFixed(2);
 } else {
   var estimatedPrice = calculator(stickerheight.value, stickerwidth.value, vpapertype,'color', ink);
   price.textContent = 'Estimated Price: ' + '$' + estimatedPrice.toFixed(2);
 };
};
};
