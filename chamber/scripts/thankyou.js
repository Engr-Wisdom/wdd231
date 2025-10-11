let modal = document.getElementById("modal");
let closeModal = document.getElementById("close-modal")
modal.showModal()

closeModal.addEventListener("click", () => {
    modal.close()
})