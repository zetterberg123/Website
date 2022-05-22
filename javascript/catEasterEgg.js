// Spawn cat easter egg script
let time = 0;
function spawn() {
    // Create elements
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");

    time++; // Increment counter

    // Add text, css, cat and event
    h2.innerText = "Mau made by script number: " + (time);
    div.classList.add("flex-row", "project-item");
    img.src = "https://loremflickr.com/500/500/cat,animal?random=" + Math.floor(Math.random() * 100);
    img.onclick = function () { toggle(this); };

    // Prepend to element with id spawn
    document.getElementById("spawn").prepend(div);
    div.appendChild(h2);
    div.appendChild(img);

    console.log("Easter egg found!");
}