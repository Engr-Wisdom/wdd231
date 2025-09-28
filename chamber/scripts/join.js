const inputs = [
    {name: document.getElementById("first-name"), errorMsg: document.getElementById("first-name-error-txt")},
    {name: document.getElementById("last-name"), errorMsg: document.getElementById("last-name-error-txt")},
    {name: document.getElementById("title"), errorMsg: document.getElementById("title-error-txt")},
    {name: document.getElementById("email"), errorMsg: document.getElementById("email-error-txt")},
    {name: document.getElementById("phone-no"), errorMsg: document.getElementById("phone-no-error-txt")},
    {name: document.getElementById("business-name"), errorMsg: document.getElementById("business-name-error-txt")},
    {name: document.getElementById("description"), errorMsg: document.getElementById("description-error-txt")}
]

const submitBtn = document.getElementById("submit-btn");

inputs.forEach(input => {
    let errorTxt = true;

    input.name.addEventListener("input", () => {
        if (input.name.value !== "") {
            input.errorMsg.style.display = "none";
            errorTxt = false;
        } else {
            input.errorMsg.style.display = "block"
            errorTxt = true;
        }
    });
});



// Ephesian 4:1