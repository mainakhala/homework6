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

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 1.1;
});

document.querySelector("#skip").addEventListener("click", function() {
video.currentTime(video.currentTime() + 5);
}

