/*
*	Modal Script
*	Display image/video in a popup when clicked
*/
const images = document.querySelectorAll<HTMLImageElement>(".project-item img");
const videos = document.querySelectorAll<HTMLVideoElement>(".project-item video");
const modal = {
	root: document.querySelector(".modal"),
	image: document.querySelector(".modal img"),
	video: document.querySelector(".modal video"),
	text: document.querySelector(".modal p"),
	closeButton: document.querySelector(".modal span"),
};

//  Add click event to close button
modal.closeButton?.addEventListener("click", () => {
	//  Ignore media and text
	// const closeIgnore = [modal.image, modal.video, modal.text].flatMap(f => f || []);
	// if (closeIgnore.some((user) => event.composedPath().includes(user))) return;

	modal.root?.classList.remove("appear");
	modal.image?.classList.remove("appear");
	modal.video?.classList.remove("appear");
});

//  Add click event to all images
images.forEach((imageElement) => {
	imageElement.addEventListener("click", () => {
		ShowModal(imageElement.src, imageElement.alt, false);
	});
});

//  Add click event to all videos
videos.forEach((videoElement) => {
	videoElement.addEventListener("click", () => {
		let videoSource = videoElement.getElementsByTagName("source")[0];
		let video = {
			url: videoSource.getAttribute("src"),
			alt: videoSource.getAttribute("alt") || "",
		};

		if (video.url) ShowModal(video.url, video.alt, true);
	});
});

function ShowModal(url: string, alt: string, isVideo: boolean) {
	if (modal.root && modal.image && modal.video && modal.text) {
		// Set content
		isVideo ? modal.video.setAttribute("src", url) : modal.image.setAttribute("src", url);
		modal.text.innerHTML = alt;

		// Enable
		modal.root.classList.add("appear");
		isVideo ? modal.video.classList.add("appear") : modal.image.classList.add("appear");
	};
};