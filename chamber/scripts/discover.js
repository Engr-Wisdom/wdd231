function displayLastView() {
    let lastView = localStorage.getItem("lastView");
    
    if (!lastView) {
        localStorage.setItem("lastView", JSON.stringify(new Date().toISOString()))
        return "Welcome! Let us know if you have any questions."
    }

    let lastTime = new Date(JSON.parse(lastView));
    let now = new Date();
    let diffInMs = now.getTime() - lastTime.getTime();
    let daysPassed = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    if (daysPassed < 1) {
        return "Back so soon! Awesome!"
    } else if (daysPassed === 1) {
        return "You last visited 1 day ago."
    } else {
        return `You last visited ${daysPassed} days ago`
    }

    localStorage.setItem("lastView", JSON.stringify(new Date().toISOString()))
}

let lastVisit = document.getElementById("lastVisit")
lastVisit.innerHTML =  `<h2>${displayLastView()}</h2>`

displayLastView()

function displayDiscoverCard(places) {
    let discoverContainer = document.querySelector(".discover-cont");

    places.forEach(place => {
        let figure = document.createElement("figure");
        figure.innerHTML = `
            <img src="${place.img}", alt="${place.name}" loading="lazy">
            <figcaption>
                <h2>${place.name}</h2>
                <p><strong>Location:</strong> ${place.address}</p>
                <p>${place.description}</p>
                <button>Learn More</button>
            </figcaption>
        `;
        discoverContainer.appendChild(figure)
    });
}

async function fetchData() {
    try {
        let response = await fetch("./JSON/directory.json");
        
        if (!response.ok) {
            throw new Error("Can't fetch Data from this resource")
        }

        let values = await response.json();
        displayDiscoverCard(values)
    } catch(error) {
        console.error(error)
    }
}

fetchData()