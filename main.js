function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";

}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}



document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const resetPassword = document.querySelector("#resetPassword");
    const title = document.querySelector("#title__nameID");
    const CreateAccountFormHeight = document.querySelector("#SignupContainer");
    const logInFormHeight = document.querySelector("#cointainershrink");
    const PasswordFormHeight = document.querySelector("#resetPassword");

    document.querySelector("#linkCreateAccount").addEventListener("click", e=> {
        e.preventDefault();
        CreateAccountFormHeight.classList.remove("form--animateresetpassout");
        logInFormHeight.classList.remove("form--animateresetpassout");
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
        title.classList.remove("title__name");
        title.classList.add("title__name--moveup");
        logInFormHeight.classList.remove("form--animateout");
        CreateAccountFormHeight.classList.add("form--animate");
        
    });

    document.querySelector("#passResetLink").addEventListener("click", e=> {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.add("form--hidden");
        resetPassword.classList.remove("form--hidden");
        title.classList.remove("title__name");
        title.classList.add("title__name--movedown");
        logInFormHeight.classList.remove("form--animateresetpassout");
        PasswordFormHeight.classList.add("form--animateresetpass");
    
    });

    document.querySelector("#backToLoginLink").addEventListener("click", () => {
        logInFormHeight.classList.remove("form--animateout");
        title.classList.add("title__name");
        title.classList.remove("title__name--movedown");
        PasswordFormHeight.classList.remove("form--animateresetpassout");
        logInFormHeight.classList.add("form--animateresetpassout");
    });

    document.querySelector("#linkLogin").addEventListener("click", e=> {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        title.classList.remove("title__name--moveup");
        title.classList.add("title__name");
        CreateAccountFormHeight.classList.remove("form--animate");
        logInFormHeight.classList.add("form--animateout")
    });

    document.querySelector("#backToLoginLink").addEventListener("click", e=> {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        resetPassword.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e=> {
        e.preventDefault();

        // Perform AJAX/FETCH Login
    });
    
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id == "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length")
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });  
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id == "signupPassword" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Password must be at least 10 characters in length")
            }
        });
    });
    
});