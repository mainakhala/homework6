var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.1;
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = 1.1;
});

document.querySelector("#skip").addEventListener("click", function() {
video.currentTime(video.currentTime() + 5);
});

document.querySelector("#mute").addEventListener("click",function() {
	if (video.muted ===  true);
		video.muted = false;
	else 
		video.muted = true;
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = document.getElementById("#volumeSlider").value;
	});

document.querySelector("#old").addEventListener("click", function() {
	video.filter.value = grayscale(100%);
	});
