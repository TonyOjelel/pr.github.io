var baseUrl = 'https://codequeen-backend.herokuapp.com';

document.getElementById('submit').addEventListener('click', function(click) {
    newSignup(click);
});

async function newSignup(event) {
    event.preventDefault();
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let contact = document.getElementById('contact').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;
    let error = document.getElementById('error');
    let successful = document.getElementById('message');
    let code = '';

    try {
        console.log(email)
        const response = await fetch(baseUrl + '/users/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "address": address,
                "contact": contact,
                "password": password,
                "confirmpassword": confirmpassword
            })
        })
        const data = await response.json()
        console.log(data.message)
        if (data.user.role == "student") {
            alert("successful sign up")
            window.location = 'login.html'
        }
    } catch (errror) {
        console.log(error)
    }

}