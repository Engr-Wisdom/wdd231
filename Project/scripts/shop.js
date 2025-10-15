import createProductCard from "./index.js";

function displayProducts(products) {
    let allProduct = document.getElementById("all-product")

    products.forEach(product => {
        let card = createProductCard(product)
        allProduct.appendChild(card)
    })
}

// Fetching Product data from JSON folder

async function fetchProduct() {
    try {
        let response = await fetch("./JSON/products.json")

        if (!response.ok) {
            throw new Error("Can't fetch data from this resource")
        }

        let values = await response.json()
        displayProducts(values)

    } catch(error) {
        console.error(error)
    }
}

fetchProduct()