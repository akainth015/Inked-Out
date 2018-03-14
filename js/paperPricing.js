var stickerheight = document.getElementById('orderheight');
var stickerwidth = document.getElementById('orderwidth');
var defaultlabel = document.getElementById('sizelabel')
var defaultsize = document.getElementById('size');
var papertype = document.getElementById('paper');
var price = document.getElementById('price');

papertype.addEventListener('click', pricing);
papertype.addEventListener('mouseover', pricing);
papertype.addEventListener('mouseout', pricing);
defaultsize.addEventListener('mouseover', pricing);
defaultsize.addEventListener('mouseout', pricing);
defaultsize.addEventListener('click', pricing);
stickerwidth.addEventListener('click', pricing);
stickerheight.addEventListener('click', pricing);


function pricing() {
  var vpapertype = papertype.options[papertype.selectedIndex].value;
  var size = defaultsize.options[defaultsize.selectedIndex].value;

if (vpapertype == 'regular' && size == '18x24') {
  estimatedPrice = '$12';
  price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'regular' && size == '24x36') {
  estimatedPrice = '$23';
  price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'regular' && size == '36x48') {
estimatedPrice = '$42';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'bond' && size == '18x24') {
estimatedPrice = '$12';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'bond' && size == '24x36') {
estimatedPrice = '$23';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'bond' && size == '36x48') {
estimatedPrice = '$42';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'vinyl-adhesive' && size == '18x24') {
estimatedPrice = '$20';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'vinyl-adhesive' && size == '24x36') {
estimatedPrice = '$38';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'vinyl-adhesive' && size == '36x48') {
estimatedPrice = '$73';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'glossy' && size == '18x24') {
estimatedPrice = '$14';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'glossy' && size == '24x36') {
estimatedPrice = '$25';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'glossy' && size == '36x48') {
estimatedPrice = '$47';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (papertype.options[papertype.selectedIndex].value == 'sticker') {
 var area = stickerheight.value * stickerwidth.value;
 if (area < 3) {
   var estimatedPrice = 0;
   price.textContent = 'Estimated Price: ' + '$' + estimatedPrice.toFixed(2);
 } else {
   var estimatedPrice = 0;
   price.textContent = 'Estimated Price: ' + '$' + estimatedPrice.toFixed(2);
 };
};
};
