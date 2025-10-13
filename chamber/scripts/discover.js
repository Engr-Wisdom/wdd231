function displayDiscoverCard(places) {
    let discoverContainer = document.querySelector(".discover-cont");

    places.forEach(place => {
        let figure = document.createElement("figure");
        figure.innerHTML = `
            <img src="${place.img}", alt="${place.name}" loading="lazy">
            <figcaption>
                <h2>${place.name}</h2>
                <p>${place.description}</p>
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