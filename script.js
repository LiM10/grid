images=["img/weed.jpg"]

function yarat(divCount,galleryWidth,columnCount,margin){
	document.write('<div class="gallery" style="width = '+galleryWidth+'px">');
	for(i=0;i<images.length;i++){
		document.write('<div class="galleryItems" style="width:'+((galleryWidth/columnCount)+2*margin)+'px; margin:'+margin+'px; "><img src="'+images[i]+'"</div>');
	}
	document.write('</div>');
}
yarat(15,960,3,10);
