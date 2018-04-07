
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
			document.getElementById('artist-name').innerHTML = 'eery - her'; document.getElementById('artist_link').href = "https://eery.bandcamp.com/album/her-ep";}
		else if(music.currentTime > 118 && music.currentTime < 270){document.getElementById('artist-name').innerHTML = 'Bunko Stew - Hide The Pain'; document.getElementById('artist_link').href = "https://inneroceanrecords.bandcamp.com/track/bunko-stew-hide-the-pain";}
		else if(music.currentTime > 270 && music.currentTime < 505){document.getElementById('artist-name').innerHTML = 'elijah - sad and boujee'; document.getElementById('artist_link').href = "https://elijahwho.bandcamp.com/track/sad-and-boujee";}
		else if(music.currentTime > 505 && music.currentTime < 758){document.getElementById('artist-name').innerHTML = 'saib - in your arms'; document.getElementById('artist_link').href = "https://saibeats.bandcamp.com/track/in-your-arms";}
		else if(music.currentTime > 758 && music.currentTime < 893){document.getElementById('artist-name').innerHTML = 'Nohidea - Thirteen (w/Idealism)'; document.getElementById('artist_link').href = "https://nohidea.bandcamp.com/track/thirteen-w-idealism";}
		else if(music.currentTime > 893 && music.currentTime < 1040){document.getElementById('artist-name').innerHTML = 'atlas - sand (prod. tomppabeats)'; document.getElementById('artist_link').href = "https://rapperatlas.bandcamp.com/track/sand-prod-tomppabeats";}
		else if(music.currentTime > 1040 && music.currentTime < 1150){document.getElementById('artist-name').innerHTML = 'potsu - im closing my eyes (ft. shiloh)'; document.getElementById('artist_link').href = "https://soundcloud.com/potsupotsu/im-closing-my-eyes";}
		else if(music.currentTime > 1150){document.getElementById('artist-name').innerHTML = 'eery - off-white'; document.getElementById('artist_link').href = "https://eery.bandcamp.com/track/off-white";}
		
		
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
			document.getElementById('artist-name').innerHTML = 'eery - her'; document.getElementById('artist_link').href = "https://eery.bandcamp.com/album/her-ep";}
	else if(music.currentTime > 118 && music.currentTime < 270){document.getElementById('artist-name').innerHTML = 'Bunko Stew - Hide The Pain'; document.getElementById('artist_link').href = "https://inneroceanrecords.bandcamp.com/track/bunko-stew-hide-the-pain";}
	else if(music.currentTime > 270 && music.currentTime < 505){document.getElementById('artist-name').innerHTML = 'elijah - sad and boujee'; document.getElementById('artist_link').href = "https://elijahwho.bandcamp.com/track/sad-and-boujee";}
	else if(music.currentTime > 505 && music.currentTime < 758){document.getElementById('artist-name').innerHTML = 'saib - in your arms'; document.getElementById('artist_link').href = "https://saibeats.bandcamp.com/track/in-your-arms";}
	else if(music.currentTime > 758 && music.currentTime < 893){document.getElementById('artist-name').innerHTML = 'Nohidea - Thirteen (w/Idealism)'; document.getElementById('artist_link').href = "https://nohidea.bandcamp.com/track/thirteen-w-idealism";}
	else if(music.currentTime > 893 && music.currentTime < 1040){document.getElementById('artist-name').innerHTML = 'atlas - sand (prod. tomppabeats)'; document.getElementById('artist_link').href = "https://rapperatlas.bandcamp.com/track/sand-prod-tomppabeats";}
	else if(music.currentTime > 1040 && music.currentTime < 1150){document.getElementById('artist-name').innerHTML = 'potsu - im closing my eyes (ft. shiloh)'; document.getElementById('artist_link').href = "https://soundcloud.com/potsupotsu/im-closing-my-eyes";}
	else if(music.currentTime > 1150){document.getElementById('artist-name').innerHTML = 'eery - off-white'; document.getElementById('artist_link').href = "https://eery.bandcamp.com/track/off-white";}
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

