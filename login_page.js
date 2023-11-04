document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '12345') {
            window.location.href = 'home_page.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
