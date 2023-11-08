var video = document.querySelector("video");

// page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;

});

// play button

 document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("volume").innerHTML = video.volume * 100 + "%";
	console.log("The video volume is" + video.volume)

 });

 // pause button

 document.querySelector("#pause").addEventListener("click", function() {
	   video.pause();
	   console.log("Pause Video");
});

// slow down 
document.querySelector("#slower").addEventListener("click", function() {
	   video.PlaybackRate *= 0.9;
	   console.log("Slow down speed is" + video.PlaybackRate);
});

// speed up 
document.querySelector("#faster").addEventListener("click", function() {
	   video.PlaybackRate /= 0.9;
	   console.log("Sped up speed is" + video.PlaybackRate);
});

// skip ahead 
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTIme = 0;
	}
	console.log("Skip Ahead");



// mute 

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Video Muted");
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
	}
});

// volume slider
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value/100;
	document.querySelector("volume").innerHTML = video.volume * 100 + "%";

});


// styled 
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School!");
	video.classList.add ("oldSchool");
	


});

// original 

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School!");
	video.classList.remove ("oldSchool");

});
