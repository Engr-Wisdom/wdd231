let inputs = [
    {name: document.getElementById("name"), errorMsg: document.getElementById("name-error-txt")},
    {name: document.getElementById("email"), errorMsg: document.getElementById("email-error-txt")},
    {name: document.getElementById("message"), errorMsg: document.getElementById("message-error-txt")}
]

let submitBtn = document.getElementById("submit-btn"); 
let submitTxt = document.getElementById("submit-txt")

inputs.forEach(input => {
    input.name.addEventListener("input", () => {
        if (input.name.value !== "") {
            input.errorMsg.classList.remove("show");
        } else {
            input.errorMsg.classList.add("show");
        }

        filledAll();
    })
})

function filledAll() {
    let complete = inputs.every(input => input.name.value.trim() !== "")

    if (complete) {
        submitBtn.style.opacity = 1;
    } else {
        submitBtn.style.opacity = 0.5;
    }
}

submitBtn.addEventListener("click", event => {
    event.preventDefault();

    let allFilled = true;

    inputs.forEach(input => {
        if (input.name.value === "") {
            input.errorMsg.classList.add("show");
            allFilled = false;
        } else {
            input.errorMsg.classList.remove("show")
        }
    });

    if (allFilled) {
        submitTxt.classList.add("show")
        setTimeout(() => {
            submitTxt.classList.remove("show")
        }, 5000)

        inputs.forEach(input => input.name.value = "")

        submitBtn.style.opacity = 0.5;
    }
})