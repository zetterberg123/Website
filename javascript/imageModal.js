// Modal Script
const images = document.querySelectorAll(".project-item img");
const videos = document.querySelectorAll(".project-item video");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-image");
const modalVid = document.querySelector(".modal-video");
const modalTxt = document.querySelector(".modal-caption");
const close = document.querySelector(".modal-close");

// Images
// Add click event to all images 
images.forEach((image) => {
    image.addEventListener("click", () => {
        // Set modal image URL and text to clicked URL and alt
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
        modal.classList.add("appear"); // Enable modal
        modalImg.classList.add("appear");

        // Add event to close button
        close.addEventListener("click", () => {
            modal.classList.remove("appear"); // Disable modal
            modalImg.classList.remove("appear");
        });
    });
});

// Videos
// Add click event to all videos
videos.forEach((video) => {
    video.addEventListener("click", () => {
        // Get video source
        let videoSrc = video.getElementsByTagName("source");
        let videoURL = videoSrc[0].getAttribute("src")
        let videoAlt = videoSrc[0].getAttribute("alt")

        // Set modal video URL and text to clicked URL and alt
        modalVid.setAttribute("src", videoURL)
        modalTxt.innerHTML = videoAlt;
        modal.classList.add("appear"); // Enable modal
        modalVid.classList.add("appear");

        // Add event to close button
        close.addEventListener("click", () => {
            modal.classList.remove("appear"); // Disable modal
            modalVid.classList.remove("appear");
        });
    });
});