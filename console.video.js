"use strict";

console.video = (url, interval, audio) => {
	const audioPlayer = new Audio(url);
	audioPlayer.oncanplaythrough = () => {
		const video = document.createElement("video");
		video.src = url;
		video.onloadedmetadata = () => {
			gifshot.createGIF({
				gifWidth: video.videoWidth,
				gifHeight: video.videoHeight,
				video: [url],
				interval: interval,
				frameDuration: interval * 10,
				numFrames: Math.floor(audioPlayer.duration / interval)
			}, obj => {
				if (!obj.error) {
					console.image(obj.image);
					if (audio) audioPlayer.play();
				}
			});
		};
	};
};