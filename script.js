 let arr = []
function submitForm(event) {
    event.preventDefault(); 

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Create an object with the form values
    const personDetails = {
        name: name,
        email: email,
        password: password
    };
    arr.push(personDetails);

    console.log(arr);

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}
