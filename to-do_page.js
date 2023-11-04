document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout-button');
    const todoListLink = document.getElementById('todo-list-link');

    logoutButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    todoListLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = '#';
    });

// Function to fetch from API
function fetchTasks() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => data.slice(0, 90));
}

// Function to create to-do list
function renderTodoList(tasks) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    tasks.forEach((task, index) => {
        const row = todoList.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${task.title}</td>
            <td><div class="d-flex justify-content-center"><input class="form-check-input" type="checkbox" value=""></div></td>
        `;

        const checkbox = row.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                checkCompletedTasks().then(completedCount => {
                    if (completedCount === 5) {
                        customAlert();
                    }
                });
            }
        });
    });
}

// Function to create customalert
function customAlert(){
    $('.alert').removeClass("hide");
    $('.alert').addClass("show");
    $('.alert').addClass("showAlert");
}
$('.close-btn').click(function(){
    $('.alert').addClass("hide");
    $('.alert').removeClass("show");
})

// Function to check completed tasks
function checkCompletedTasks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const completedTasks = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
            resolve(completedTasks.length);
        }, 0);
    });
}

// Initialize the app
fetchTasks()
    .then(tasks => {
        renderTodoList(tasks);
    })
    .catch(error => console.error(error));
});

