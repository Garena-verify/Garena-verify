const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const ID = "903903020";
const MAKE_WEBHOOK_URL = 'https://hook.eu2.make.com/qqv9me0pwvzo2a5qtdj3q4gjlfkvnpup'; // Замените на ваш новый URL вебхука

registerBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default behavior of the button
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default behavior of the submit button

    let idField = document.getElementById('id').value;

    if (idField !== ID) {
        alert("Invalid ID");
        return false; // Prevent the form from submitting
    }

    // Prepare payload for Make webhook
    const makePayload = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        id: document.getElementById('id').value
    };

    // Send data to Make webhook
    fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(makePayload)
    })
    .then(response => {
        if (response.ok) {
            console.log('Data sent to Make successfully.');
        } else {
            console.error('Error sending data to Make. Status:', response.status);
            return response.text(); // Optional: for additional debugging
        }
    })
    .then(responseText => {
        console.log('Make webhook response:', responseText);
    })
    .catch(error => {
        console.error('Error sending data to Make:', error);
    });
});
