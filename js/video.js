var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	
	document.getElementById("volumeSlider").addEventListener("change",function(){
		video.volume = this.value / 100;
	});
	
});



document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.1;
	console.log("video.playbackRate");
});




document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = 1.1;
	console.log("video.playbackRate");
});

document.querySelector("#skip").addEventListener("click", function() {
video.currentTime(video.currentTime() + 5);
});

document.querySelector("#mute").addEventListener("click",function() {
	if (video.muted ===  true);
		video.muted = false;
		document.querySelector("#mute").value= "unmute";
	else 
		video.muted = true;
		document.querySelector("#mute").value= "mute"
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = document.getElementById("#volumeSlider").value;
	});

document.querySelector("#old").addEventListener("click", function() {
	// video.filter.value = grayscale(100%);
	document.getElementById("old").id = ".oldTime";
	});
