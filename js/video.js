var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	
	let vol = document.querySelector("#volume").innerHTML= video.volume;
	
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
	if (video.mute)
		video.muted = false;
		document.querySelector("#mute").innerHTML= "unmute";
	else 
		{video.muted = true;
		document.querySelector("#mute").innerHTML= "mute"}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this);
	console.log(this.value);
	video.volume = document.getElementById("#volumeSlider").value;
	});

document.querySelector("#old").addEventListener("click", function() {
	// video.filter.value = grayscale(100%);
	document.getElementById("#old").className = ".oldTime";
	});
