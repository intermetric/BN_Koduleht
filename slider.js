var i = 0;
var pildid = [];
var kestus = 4000;



pildid[0] = 'pilt1c.jpg';
pildid[1] = 'pilt2c.jpg';
pildid[2] = 'pilt4c.jpg';
pildid[3] = 'pilt3c.jpg';
pildid[4] = 'pilt1c.jpg';
pildid[5] = 'pilt2c.jpg';
pildid[6] = 'pilt4c.jpg';



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

	setTimeout("slider()", kestus);
}

window.onload = slider
