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
  estimatedPrice = '$11';
  price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'regular' && size == '24x36') {
  estimatedPrice = '$21';
  price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'regular' && size == '36x48') {
estimatedPrice = '$40';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'bond' && size == '18x24') {
estimatedPrice = '$12';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'bond' && size == '24x36') {
estimatedPrice = '$22';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'bond' && size == '36x48') {
estimatedPrice = '$41';
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
estimatedPrice = '$13';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'glossy' && size == '24x36') {
estimatedPrice = '$23';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (vpapertype == 'glossy' && size == '36x48') {
estimatedPrice = '$45';
price.textContent = 'Estimated Price: ' + estimatedPrice;
};

if (papertype.options[papertype.selectedIndex].value == 'sticker') {
 var area = stickerheight.value * stickerwidth.value;
 if (area < 3) {
   var estimatedPrice = ((area * 2.270903) / (0.58 - (.025 * area) + (.000926 * ((area)^2))));
   price.textContent = 'Estimated Price: ' + '$' + estimatedPrice.toFixed(2);
 } else {
   var estimatedPrice = ((area * 2.270908) / (0.571 - (0.0721 * Math.log(area))));
   price.textContent = 'Estimated Price: ' + '$' + estimatedPrice.toFixed(2);
 };
};
};
