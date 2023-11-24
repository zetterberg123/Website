/*
 *	Expand image script
 */
export function toggle(x: HTMLImageElement) {
	let style = getComputedStyle(x);
	// Gets and checks max-height to see if img need expanding
	if (x.style.maxHeight != "none" && x.clientHeight >= parseInt(style.getPropertyValue("max-height"))) {
		x.style.maxHeight = "none";

		// Scroll to image center
		x.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "center",
		});
	}
	else {
		x.style.maxHeight = "";
	}
}
