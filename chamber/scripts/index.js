function toggleNavBar() {
    let navBar = document.getElementById("nav-bar");
    let menuBtn = document.getElementById("menu-btn");

    if (navBar) {
        menuBtn.addEventListener("click", () => {
            navBar.classList.toggle("show");
        });

        document.addEventListener("click", event => {
            if (!menuBtn.contains(event.target) && !navBar.contains(event.target)) {
                navBar.classList.remove("show")
            }
        });
    }
}

toggleNavBar();

function displayBusiness(values) {
    let businessCont = document.getElementById("business-cont");
    values.forEach(value => {
        let figure = document.createElement("figure");
        figure.className = "business"
        figure.innerHTML = `
            <img src="${value.img}" alt="${value.name} loading="lazy">
            <figcaption>
                <h3>${value.name}</h3>
                <p><strong>EMAIL:</strong> ${value.email}</p>
                <p><strong>PHONE:</strong> ${value.phone}</p>
                <p><strong>URL:</strong> <a href="${value.url}">${value.url}</a></p>
            </figcaption>
        `;
        businessCont.appendChild(figure)
    });
}

async function fetchBusiness() {
    let response = await fetch("./JSON/members.json");
    if (!response.ok) {
        console.error("Can't get data from this resource")
    }

    let values = await response.json();
    displayBusiness(values)
}

fetchBusiness();

let lastModification = document.getElementById("last-modification");

setInterval(() => {
    let date = new Date();
    let month = String(date.getMonth()).padStart(2, 0);
    let day = String(date.getDate()).padStart(2, 0);
    let year = String(date.getFullYear()).padStart(2, 0);
    let hour = String(date.getHours()).padStart(2, 0);
    let minute = String(date.getMinutes()).padStart(2, 0);
    let second = String(date.getSeconds()).padStart(2, 0);

    lastModification.textContent = `Last Modification: ${month}/${day}/${year} ${hour}:${minute}:${second}`
});

let listBtn = document.getElementById("list");
let businessCont = document.getElementById("business-cont");
let business = document.getElementsByClassName("business");
let businessFigcaption = document.querySelectorAll("figure");
console.log(businessFigcaption)

for (let i = 0; i < businessFigcaption.length; i++) {
    console.log(i)
}

listBtn.addEventListener("click", () => {
    businessCont.classList.toggle("list")
    for (let i = 0; i < business.length; i++) {
        business[i].classList.toggle("list")
    }
});