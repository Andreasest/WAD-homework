async function loadHeader() {
    // Insert html into every page
    const headerContainer = document.createElement("div");
    document.body.prepend(headerContainer);

    try {
    const response = await fetch("header.html");
    const headerHTML = await response.text();
    headerContainer.innerHTML = headerHTML;

    const script = document.createElement("script");
    script.src = "src/js/script.js";
    document.body.appendChild(script);
    } catch (err) {
    console.error("Error loading header:", err);
    }

    // Dropdown functionality
    const profilePic = document.getElementById("profilePic");
    const dropdownMenu = document.getElementById("dropdownMenu");

    profilePic.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
    });


    document.addEventListener("click", (e) => {
    if (!profilePic.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("show");
    }
    });
}

document.addEventListener("DOMContentLoaded", loadHeader);