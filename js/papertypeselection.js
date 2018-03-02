var stickerheight = document.getElementById('orderheight');
var stickerwidth = document.getElementById('orderwidth');
var defaultlabel = document.getElementById('sizelabel')
var defaultsize = document.getElementById('size');
var papertype = document.getElementById('paper');


papertype.addEventListener('click', checkSticker);
papertype.addEventListener('mouseover', checkSticker);
papertype.addEventListener('mouseout', checkSticker);
defaultsize.addEventListener('click', checkSticker);
stickerwidth.addEventListener('click', checkSticker);
stickerheight.addEventListener('click', checkSticker);

defaultlabel.style.visibility = 'hidden';
defaultsize.style.visibility = 'hidden';
stickerheight.style.visibility = 'hidden';
stickerwidth.style.visibility = 'hidden';


function checkSticker() {
  if (papertype.options[papertype.selectedIndex].value == 'sticker') {
    defaultlabel.style.visibility = 'hidden';
    defaultsize.style.visibility = 'hidden';
    stickerheight.style.visibility = 'visible';
    stickerwidth.style.visibility = 'visible';
  } else {
    defaultlabel.style.visibility = 'visible';
    defaultsize.style.visibility = 'visible';
    stickerheight.style.visibility = 'hidden';
    stickerwidth.style.visibility = 'hidden';
  };
};
