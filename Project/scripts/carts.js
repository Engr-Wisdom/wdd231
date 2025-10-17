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
            <td><input type="number" value="1" min="1"></td>
            <td><button class="delete-icon"><i class="fa-solid fa-trash"></i></button></td>
            <dialog id="modal">
                <div>
                    <p>Delete Product</p>
                    <p>This will delete <strong>${cart.name}</strong> from the cart</p>
                </div>
                <div>
                    <button class="cancel-btn">Cancel</button>
                    <button class="delete-btn">Delete</button>
                </div>
            </dialog>
        `; 

        let deleteIcon = tr.querySelector(".delete-icon")
        let modal = tr.querySelector("#modal")
        let cancelBtn = tr.querySelector(".cancel-btn");
        let deleteBtn = tr.querySelector(".delete-btn");

        deleteIcon.addEventListener("click", () => modal.showModal())
        cancelBtn.addEventListener("click", () => modal.close())

        deleteBtn.addEventListener("click", () => {
            carts.splice(index, 1);
            saveCarts(carts);
            displayCartProducts()
        })

        tbody.appendChild(tr)
    })
}

displayCartProducts()