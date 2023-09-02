const eMail = document.querySelector("#email");
const submitBtn = document.querySelector("button");
const errTxt = document.querySelector(".error-text");

submitBtn.addEventListener("click", () => {
    if (isValidEmail(eMail.value)) {
        errTxt.style.display = "none";
    } else {
        errTxt.style.display = "block";
        eMail.style.border = "1px solid rgb(180, 86, 86)";
    }
})

function isValidEmail(email) {
    // Regular expression pattern for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
