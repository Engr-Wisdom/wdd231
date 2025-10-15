export function saveCarts(carts) {
    localStorage.setItem("carts", JSON.stringify(carts))
}

export function getCarts() {
    return JSON.parse(localStorage.getItem("carts")) || []
}

export function displayCartProducts() {
    let carts = getCarts();

    let tbody = document.querySelector("tbody")
    if (!tbody) return;
    tbody.innerHTML = ""
    carts.forEach((cart, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${cart.img}" alt="${cart.name}" loading="lazy"></td>
            <td>${cart.name}</td>
            <td>${cart.price}</td>
            <td></td>
            <td><button class="delete-btn"><i class="fa-solid fa-trash"></button></td>
        `; 

        let deleteBtn = tr.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            carts.splice(index, 1);
            saveCarts(carts);
            displayCartProducts()
        })

        tbody.appendChild(tr)
    })
}

displayCartProducts()