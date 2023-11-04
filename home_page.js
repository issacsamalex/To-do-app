document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout-button');
    const todoListLink = document.getElementById('todo-list-link');

    logoutButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    todoListLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'to-do_page.html';
    });
});


