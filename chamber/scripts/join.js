let form = document.querySelector("form")
let formData = document.getElementById("form-data")

const inputs = [
    {id: document.getElementById("first-name"), errorMsg: document.getElementById("first-name-error-txt"), label: "First Name"},
    {id: document.getElementById("last-name"), errorMsg: document.getElementById("last-name-error-txt"), label: "Last Name"},
    {id: document.getElementById("title"), errorMsg: document.getElementById("title-error-txt"), label: "Title"},
    {id: document.getElementById("email"), errorMsg: document.getElementById("email-error-txt"), label: "Email"},
    {id: document.getElementById("phone-no"), errorMsg: document.getElementById("phone-no-error-txt"), label: "Phone No"},
    {id: document.getElementById("business-name"), errorMsg: document.getElementById("business-name-error-txt"), label: "Business Name"},
    {id: document.getElementById("description"), errorMsg: document.getElementById("description-error-txt"), label: "Description"}
]

const submitBtn = document.getElementById("submit-btn");

submitBtn.style.opacity = 0.5;

function updateFormData() {
    formData.innerHTML = "";

    let h1 = document.createElement("h1");
    h1.textContent = "Submitted Information"

    let ul = document.createElement("ul");

    inputs.forEach(input => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${input.label}:</strong> ${input.id.value}`;
        ul.appendChild(li);
    });
    
    let p = document.createElement("p");
    p.innerHTML = `<strong>Time Stamp:</strong> ${new Date().toISOString()}`

    let button = document.createElement("button");
    button.textContent = "Go to Homepage";

    button.addEventListener("click", () => {
        window.location.href = "./index.html"
    })

    formData.append(h1, ul, p, button);
}

function checkFormCompletion() {
    let allFilled = inputs.every(input => input.id.value.trim() !== "");
    if (allFilled) {
        submitBtn.style.opacity = 1;
    } else {
        submitBtn.style.opacity = 0.5;
    }
}

inputs.forEach(input => {
    input.id.addEventListener("input", () => {
        if (input.errorMsg) {
            input.errorMsg.style.display = input.id.value ? "none" : "block";
        }

        checkFormCompletion();
        updateFormData();
    });
}); 

submitBtn.addEventListener("click", event => {
    event.preventDefault();

    inputs.forEach(input => {
        if (input.id.value == "") {
            input.errorMsg.style.display = "block";
        } else {
            form.style.display = "none";
            submitBtn.style.opacity = 0.5;
            formData.style.display = "block";
        }
    })
});