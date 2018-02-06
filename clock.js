dg = new Array();
dg[0]=new Image();dg[0].src="img/clock/dg0.png";
dg[1]=new Image();dg[1].src="img/clock/dg1.png";
dg[2]=new Image();dg[2].src="img/clock/dg2.png";
dg[3]=new Image();dg[3].src="img/clock/dg3.png";
dg[4]=new Image();dg[4].src="img/clock/dg4.png";
dg[5]=new Image();dg[5].src="img/clock/dg5.png";
dg[6]=new Image();dg[6].src="img/clock/dg6.png";
dg[7]=new Image();dg[7].src="img/clock/dg7.png";
dg[8]=new Image();dg[8].src="img/clock/dg8.png";
dg[9]=new Image();dg[9].src="img/clock/dg9.png";
dgam=new Image();dgam.src="img/clock/dgam.png";
dgpm=new Image();dgpm.src="img/clock/dgpm.png";

function dotime(){ 
	var d=new Date();
	var hr=d.getHours(),mn=d.getMinutes(),se=d.getSeconds();

	// set AM or PM
	document.ampm.src=((hr<12)?dgam.src:dgpm.src);

	// adjust from 24hr clock
	if(hr==0){hr=12;}
	else if(hr>12){hr-=12;}

	document.hr1.src = getSrc(hr,10);
	document.hr2.src = getSrc(hr,1);
	document.mn1.src = getSrc(mn,10);
	document.mn2.src = getSrc(mn,1);
	document.se1.src = getSrc(se,10);
	document.se2.src = getSrc(se,1);
}

function getSrc(digit,index){
	return dg[(Math.floor(digit/index)%10)].src;
}

window.onload=function(){
	dotime();
	setInterval(dotime,1000);
}
