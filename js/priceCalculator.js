function rgb2cmyk (r,g,b) {
     var computedC = 0;
     var computedM = 0;
     var computedY = 0;
     var computedK = 0;

     //remove spaces from input RGB values, convert to int
     var r = parseInt( (''+r).replace(/\s/g,''),10 );
     var g = parseInt( (''+g).replace(/\s/g,''),10 );
     var b = parseInt( (''+b).replace(/\s/g,''),10 );


     // BLACK
     if (r==0 && g==0 && b==0) {
      computedK = 1;
      return [0,0,0,1];
     }

     computedC = 1 - (r/255);
     computedM = 1 - (g/255);
     computedY = 1 - (b/255);

     var minCMY = Math.min(computedC,
                  Math.min(computedM,computedY));
     computedC = (computedC - minCMY) / (1 - minCMY) ;
     computedM = (computedM - minCMY) / (1 - minCMY) ;
     computedY = (computedY - minCMY) / (1 - minCMY) ;
     computedK = minCMY;

     return [computedC,computedM,computedY,computedK];
}

Jimp.read(files.file.path, function (err, image) {
    if (err) throw err;
    var count = 0;
    var area = image.bitmap.width * image.bitmap.width;
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        // x, y is the position of this pixel on the image
        // idx is the position start position of this rgba tuple in the bitmap Buffer
        // this is the image

        var red   = this.bitmap.data[ idx + 0 ];
        var green = this.bitmap.data[ idx + 1 ];
        var blue  = this.bitmap.data[ idx + 2 ];
        var alpha = this.bitmap.data[ idx + 3 ];

        var cmyk = rgb2cmyk (red,green,blue);
        count += cmyk[0],cmyk[1],cmyk[2],cmyk[3];

        // rgba values run from 0 - 255
        // e.g. this.bitmap.data[idx] = 0; // removes red from this pixel
    });
    var percentInk = count / area;
    console.log(percentInk);
});
