let arr = [];

function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const personDetails = { 
        name : name,
        email : email ,
        password : password 
    };

    arr.push(personDetails);

    console.log(arr);


    resetvalue('name','email','password')

    name.value = '';
    email.value = '';
    password.value ='';
}



function validateName() {
    const name = document.getElementById('name').value;
    const nameValiDiv = document.getElementById('name-vali');
    const invalidCharsRegex = /[0-9!@#$%^&*()_+={};:'",<>.?/\\[\]\\|`~]/;

    nameValiDiv.style.fontSize = 'small';
    nameValiDiv.innerText = invalidCharsRegex.test(name) ? 'Name should not contain numeric digits or special characters.' : '';

}

function validatePassword() {
    const password = document.getElementById('password');
    const passValiDiv = document.getElementById('pass-vali');
    passValiDiv.style.fontSize = 'small';
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const digits = /[0-9]/;

    const hasUppercase = uppercase.test(password.value);
    const hasLowercase = lowercase.test(password.value);
    const hasSpecialChar = specialChar.test(password.value);
    const hasDigits = digits.test(password.value);

    const messages = [];

    if (!hasUppercase) messages.push('uppercase');
    if (!hasLowercase) messages.push('lowercase');
    if (!hasSpecialChar) messages.push('special character');
    if (!hasDigits) messages.push('numeric digit');

    passValiDiv.innerText = messages.length > 0 ? `Password must have a ${messages.join(', ')}.` : '';

}
