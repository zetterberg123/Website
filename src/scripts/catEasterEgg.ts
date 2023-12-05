/*
 *	Spawn cat easter egg script
 */
import { toggle } from "./expandImage";

// Find logo image and project section
const logo = document.querySelector(".logo-img");
const projectsSection = document.getElementById("projects");
let time = 0;

// Handle clicks on logo.
logo?.addEventListener("click", () => {
	spawn();
});

function spawn() {
	if (!projectsSection) return;

	// Create elements
	let div = document.createElement("div");
	let img = document.createElement("img");
	let h2 = document.createElement("h2");

	// Add text, css and image
	h2.innerText = "Mau made by script number: " + time;
	div.classList.add("flex-col");
	img.src = "https://loremflickr.com/500/500/cat,animal?random=" + Math.floor(Math.random() * 100);

	// Add event
	img.addEventListener("click", () => {
		toggle(img);
	});

	// Prepend to project section
	projectsSection.prepend(div);
	div.appendChild(h2);
	div.appendChild(img);

	time++; // Increment counter
	console.log("Easter egg found!");
}
