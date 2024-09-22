const form = document.querySelector ('#form');
const username = document.querySelector ('#username');
const email = document.querySelector ('#email');
const password = document.querySelector ('#password');
const cpassword = document.querySelector ('#cpassword');

form.addEventListener ('submit', (e) => {
    if (!validateInputs()) {
        e.preventDefault();
    }
});

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    let success = true;

    if ((usernameVal === '')) {
        success = false;
        setError (username, "Username is required");
    } else {
        setSuccess (username, "Username is correct");
    }

    if ((emailVal === '')) {
        success = false;
        setError (email, "Email is required");
    }else if (!validateEmail (emailVal)){
        success = false;
        setError (email, "Enter the valid email");
    }
     else {
        setSuccess ("valid email");
    }

    if ((passwordVal === '')) {
        success = false;
        setError (password, "password is required");
    }else if((passwordVal.length < 8)) {
        success = false;
        setError (password, "password want to be 8 character");
    }
    else {
        setSuccess (password, "password is valid");
    }

    if (cpasswordVal === '') {
        success = false;
        setError (cpassword, "Enter a correct password");
    }else if ((cpasswordVal!==passwordVal)) {
        success = false;
        setError (cpassword, "password does not match");
    }
     else {
        setSuccess (cpassword,"password matched");
    }

    return  success;
}
    function setError(element,message) {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector ('.error');
        errorElement.innerText = message;
        inputGroup.classList.add('error')
    }

    function setSuccess(element,message) {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector ('.success');
        errorElement.innerText = message;
        inputGroup.classList.add('success');
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };