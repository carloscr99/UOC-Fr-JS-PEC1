const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(String(input.value).toLowerCase()))
        showSuccess(input);
    else
        showError(input, 'Email is not valid')

}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '')
            showError(input, `${getFieldName(input)} is required`);
        else
            showSuccess(input);
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min)
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    else if (input.value.length > max)
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    else
        showSuccess(input);

}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value)
        showError(input2, 'Passwords do not match');

}

function getFieldName(input) {
    // Get the first character and make it uppercase, then concatenate the rest using the slice function starting from the specified index.
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault(); //prevent submit the form

    // in this way, we send to the function an array of inputs, and only call to the function one
    checkRequired([username, email, password, password2]);

    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);


});