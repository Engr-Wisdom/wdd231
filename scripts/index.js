function toggleBar() {
    let menuBtn = document.getElementById("menu-btn");
    let navBar = document.getElementById("nav-bar");
    let removeBtn = document.getElementById("remove-btn");

    if (navBar) {
        menuBtn.addEventListener("click", () => {
            navBar.classList.toggle("show");
        });

        removeBtn.addEventListener("click", () => {
            navBar.classList.remove("show");
        })

        document.addEventListener("click", event => {
            if (!menuBtn.contains(event.target) && !navBar.contains(event.target)) {
                navBar.classList.remove("show")
            }
        });
    }
}

toggleBar();

let lastModified = document.getElementById("last-modified");
let displayYear = document.getElementById("year")

setInterval(() => {
    let currentDate = new Date();
    let year = String(currentDate.getFullYear()).padStart(2, 0);
    let month = String(currentDate.getMonth()).padStart(2, 0);
    let date = String(currentDate.getDate()).padStart(2, 0);
    let hour = String(currentDate.getHours()).padStart(2, 0);
    let minute = String(currentDate.getMinutes()).padStart(2, 0);
    let second = String(currentDate.getSeconds()).padStart(2, 0);
    
    displayYear.textContent = `${year}`;
    lastModified.textContent = `Last Modification: ${date}/${month}/${year}, ${hour}:${minute}:${second}`
});