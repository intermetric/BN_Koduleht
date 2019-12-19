var i = 0;
var pildid = ['/img/pilt1c.jpg',
			'/img/pilt2c.jpg',
			'/img/pilt4c.jpg',
			'/img/pilt3c.jpg',
			'/img/pilt1c.jpg',
			'/img/pilt2c.jpg',
			'/img/pilt4c.jpg'];

var kestvus = 4000;


function slider(){
	document.slide1.src = pildid[i];
	document.slide2.src = pildid[i+1];
	document.slide3.src = pildid[i+2];
	document.slide4.src = pildid[i+3];

	if(i < pildid.length - 4){
		i++;
	} else {
		i = 0;
	}

	setTimeout("slider()", kestvus);
}

window.onload = slider
