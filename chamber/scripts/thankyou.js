let modal = document.getElementById("modal");
let closeModal = document.getElementById("close-modal")
modal.showModal()

closeModal.addEventListener("click", () => {
    modal.close()
});


let information = document.querySelector("#membership-data div")

let data = JSON.parse(localStorage.getItem("formData"))
let ul = document.createElement("ul")
ul.innerHTML = `
    <li><strong>First Name:</strong> ${data["First Name"]}</li>
    <li><strong>Last Name:</strong> ${data["Last Name"]}</li>
    <li><strong>Title:</strong> ${data["Title"]}</li>
    <li><strong>Email:</strong> ${data["Email"]}</li>
    <li><strong>Phone No:</strong> ${data["Phone No"]}</li>
    <li><strong>Business Name:</strong> ${data["Business Name"]}</li>
    <li><strong>Description:</strong> ${data["Description"]}</li>
    <li><strong>Time Stamp:</strong> ${new Date().toISOString()}</li>
`;

information.appendChild(ul);

let homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
    window.location.href = "./index.html";
    localStorage.clear();
});