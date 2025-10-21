window.addEventListener("DOMContentLoaded", () => {
    let mainImg = document.getElementById("main-img");
    let productName = document.querySelector(".product-name");
    let productPrice = document.querySelector(".product-price")

    let product = JSON.parse(localStorage.getItem("selectedProduct"));

    mainImg.src = product.img;
    productName.textContent = product.name;
    productPrice.textContent = product.price;
})

// http://localhost:5173/