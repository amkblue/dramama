// search bar
const searchBtn = document.querySelector('.search-btn');
const closeBtn = document.querySelector('.close-btn');
const searchBox = document.querySelector('.search-box');

searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    closeBtn.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    closeBtn.classList.toggle('active');
});

// create register
const register = document.getElementById('register');

// submit registration form - register user
register.addEventListener('submit', function(submit) {
    submit.preventDefault(); // no blank white page
    const form = new FormData(this);
    const data = {
        username: form.get('username'),
        email: form.get('email'),
        password: form.get('password')
    };
    fetch('http://localhost:4447/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
});