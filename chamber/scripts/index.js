function toggleMode() {
    let mode = document.getElementById("mode");

    mode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    })
}

toggleMode()

function toggleNavBar() {
    let navBar = document.getElementById("nav-bar");
    let menuBtn = document.getElementById("menu-btn");
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

toggleNavBar();

function displayBusinessView() {
    let viewBtn = document.getElementById("view-btn");
    let view = document.getElementById("view")

    viewBtn.addEventListener("click", () => {
        view.classList.toggle("show")
    })

    let businessCont = document.getElementById("business-cont");
    let business = document.getElementsByClassName("business")

    let card = document.getElementById("card");
    let list = document.getElementById("list");

    list.addEventListener("click", event => {
        if (event) {
            list.classList.add("active");
            card.classList.remove("active")

            businessCont.classList.add("list")

            for (let i = 0; i < business.length; i++) {
                business[i].classList.add("list")
            }

            view.classList.remove("show");
        }
    });

    card.addEventListener("click", event => {
        if (event) {
            card.classList.add("active");
            list.classList.remove("active");

            businessCont.classList.remove("list")

            for (let i = 0; i < business.length; i++) {
                business[i].classList.remove("list")
            }

            view.classList.remove("show")
        }
    });
}

displayBusinessView();

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
                <p><strong>Member Level:</strong> ${value.memberLevel}</p>
            </figcaption>
        `;

        figure.addEventListener("click", () => {
            window.location.href = `${value.url}`
        })
        businessCont.appendChild(figure)
    });
}

async function fetchBusiness() {
    try {
        let response = await fetch("./JSON/members.json");
        if (!response.ok) {
            throw new Error("Can't fetch data from resource");
        }

        let values = await response.json();
        displayBusiness(values);

    } catch(error) {
        console.error(error);
    }
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