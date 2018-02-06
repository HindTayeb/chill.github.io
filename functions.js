
//audio functioning

var music = document.getElementById('music');

function playAudio() {
	if (music.paused) {
		music.play();
		pbutton.className = "";
		pbutton.className = "pause";
		document.getElementById('radio').src='img/radioOn.gif';
		document.getElementById('pt').innerHTML = 'play &#9658';
		if(music.currentTime >= 0 && music.currentTime < 118){
			document.getElementById('artist-name').innerHTML = 'eery - her';}
		else if(music.currentTime > 118 && music.currentTime < 270){document.getElementById('artist-name').innerHTML = 'Bunko Stew - Hide The Pain';}
		else if(music.currentTime > 270 && music.currentTime < 505){document.getElementById('artist-name').innerHTML = 'elijah - sad and boujee';}
		else if(music.currentTime > 505 && music.currentTime < 758){document.getElementById('artist-name').innerHTML = 'saib - in your arms';}
		else if(music.currentTime > 758 && music.currentTime < 893){document.getElementById('artist-name').innerHTML = 'Nohidea - Thirteen (w/Idealism)';}
		else if(music.currentTime > 893 && music.currentTime < 1040){document.getElementById('artist-name').innerHTML = 'atlas - sand (prod. tomppabeats)';}
		else if(music.currentTime > 1040 && music.currentTime < 1150){document.getElementById('artist-name').innerHTML = 'potsu - im closing my eyes (ft. shiloh)';}
		else if(music.currentTime > 1150){document.getElementById('artist-name').innerHTML = 'eery - off-white';}
		
		
	} else {
		music.pause();
		pbutton.className = "";
		pbutton.className = "play";
		document.getElementById('radio').src='img/radioOff.png';
		document.getElementById('pt').innerHTML = 'pause ||';
	}
	
}

function playNext(){
	if (music.currentTime < 118){music.currentTime = 118;}
	else if(music.currentTime < 270){music.currentTime = 270;}
	else if(music.currentTime < 505){music.currentTime = 505;}
	else if(music.currentTime < 758){music.currentTime = 758;}
	else if(music.currentTime < 893){music.currentTime = 893;}
	else if(music.currentTime < 1040){music.currentTime = 1040;}
	else if(music.currentTime < 1150){music.currentTime = 1150;}
	else if(music.currentTime > 1150){
	
	music.currentTime = 1292;
	pbutton.className = "play";
		document.getElementById('radio').src='img/radioOff.png';}

}

function playPrevious(){
	if (music.currentTime < 118){music.currentTime = 0;}
	else if(music.currentTime > 118 && music.currentTime < 270){music.currentTime = 0;}
	else if(music.currentTime > 270 && music.currentTime < 505){music.currentTime = 118;}
	else if(music.currentTime > 505 && music.currentTime < 758){music.currentTime = 270;}
	else if(music.currentTime > 758 && music.currentTime < 893){music.currentTime = 505;}
	else if(music.currentTime > 893 && music.currentTime < 1040){music.currentTime = 758;}
	else if(music.currentTime > 1040 && music.currentTime < 1150){music.currentTime = 893;}
	else if(music.currentTime > 1150){music.currentTime = 1040;}

}

function isPlaying(music) { return !music.paused; }

music.ontimeupdate = function(){
	if(music.currentTime >= 0 && music.currentTime < 118){
			document.getElementById('artist-name').innerHTML = 'eery - her';}
	else if(music.currentTime > 118 && music.currentTime < 270){document.getElementById('artist-name').innerHTML = 'Bunko Stew - Hide The Pain';}
	else if(music.currentTime > 270 && music.currentTime < 505){document.getElementById('artist-name').innerHTML = 'elijah - sad and boujee';}
	else if(music.currentTime > 505 && music.currentTime < 758){document.getElementById('artist-name').innerHTML = 'saib - in your arms';}
	else if(music.currentTime > 758 && music.currentTime < 893){document.getElementById('artist-name').innerHTML = 'Nohidea - Thirteen (w/Idealism)';}
	else if(music.currentTime > 893 && music.currentTime < 1040){document.getElementById('artist-name').innerHTML = 'atlas - sand (prod. tomppabeats)';}
	else if(music.currentTime > 1040 && music.currentTime < 1150){document.getElementById('artist-name').innerHTML = 'potsu - im closing my eyes (ft. shiloh)';}
	else if(music.currentTime > 1150){document.getElementById('artist-name').innerHTML = 'eery - off-white';}
};

music.onended = function() {
   pbutton.className = "";
		pbutton.className = "play";
		document.getElementById('radio').src='img/radioOff.png';
		document.getElementById('artist-name').innerHTML = '';
};

function changeImg(img){
	img.src = "img/cassette-out.png";
}


// lamp light switch
/*

$('#lamp-button').on('click',function(){
    if($('#lamp').css('display')!='none'){
    $('#lamp-light').show().hide();
    }else if($('#lamp-light').css('display')!='none'){
        $('#lamp').show().hide();
    }
});
*/