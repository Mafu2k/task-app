// adres API
const API_URL = 'http://localhost:8080/api/todos';

let todos = [];
let currentFilter = 'all';

// uruchom jak strona sie zaladuje
document.addEventListener('DOMContentLoaded', function() {
    loadTodos();

    document.getElementById('todoForm').addEventListener('submit', addTodo);
    document.getElementById('searchInput').addEventListener('input', searchTodos);

    // filtry
    let filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            showTodos();
        });
    });
});

// pobierz zadania z backendu
function loadTodos() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            todos = data;
            showTodos();
            updateCount();
        })
        .catch(error => {
            console.log('Błąd:', error);
            alert('Nie można pobrać zadań. Sprawdź czy backend działa.');
        });
}

// wyswietl zadania
function showTodos() {
    let todoList = document.getElementById('todoList');

    // filtrowanie
    let filtered = todos;
    if (currentFilter === 'completed') {
        filtered = todos.filter(t => t.completed);
    } else if (currentFilter === 'incomplete') {
        filtered = todos.filter(t => !t.completed);
    }

    if (filtered.length === 0) {
        todoList.innerHTML = '<p class="empty">Brak zadań do wyświetlenia</p>';
        return;
    }

    let html = '';
    filtered.forEach(todo => {
        let date = new Date(todo.createdAt).toLocaleDateString('pl-PL');

        html += `
            <div class="todo-item ${todo.completed ? 'completed' : ''}">
                <h3>${todo.title}</h3>
                ${todo.description ? '<p class="todo-desc">' + todo.description + '</p>' : ''}
                <p class="todo-date">Dodano: ${date}</p>
                <div class="todo-btns">
                    <button class="btn-done" onclick="toggleTodo(${todo.id})">
                        ${todo.completed ? 'Cofnij' : 'Zrobione'}
                    </button>
                    <button class="btn-delete" onclick="deleteTodo(${todo.id})">Usuń</button>
                </div>
            </div>
        `;
    });

    todoList.innerHTML = html;
}

// dodaj nowe zadanie
function addTodo(e) {
    e.preventDefault();

    let title = document.getElementById('todoTitle').value;
    let description = document.getElementById('todoDescription').value;

    if (!title) {
        alert('Wpisz tytuł zadania!');
        return;
    }

    let newTodo = {
        title: title,
        description: description,
        completed: false
    };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('todoForm').reset();
        loadTodos();
    })
    .catch(error => {
        console.log('Błąd:', error);
        alert('Nie można dodać zadania');
    });
}

// oznacz jako zrobione / cofnij
function toggleTodo(id) {
    fetch(API_URL + '/' + id + '/toggle', {
        method: 'PATCH'
    })
    .then(response => response.json())
    .then(data => {
        loadTodos();
    })
    .catch(error => {
        console.log('Błąd:', error);
    });
}

// usun zadanie
function deleteTodo(id) {
    if (!confirm('Na pewno usunąć to zadanie?')) {
        return;
    }

    fetch(API_URL + '/' + id, {
        method: 'DELETE'
    })
    .then(() => {
        loadTodos();
    })
    .catch(error => {
        console.log('Błąd:', error);
    });
}

// szukaj
function searchTodos(e) {
    let search = e.target.value.toLowerCase();

    if (search === '') {
        showTodos();
        return;
    }

    let todoList = document.getElementById('todoList');
    let filtered = todos.filter(t => {
        return t.title.toLowerCase().includes(search) ||
               (t.description && t.description.toLowerCase().includes(search));
    });

    if (filtered.length === 0) {
        todoList.innerHTML = '<p class="empty">Nie znaleziono zadań</p>';
        return;
    }

    let html = '';
    filtered.forEach(todo => {
        let date = new Date(todo.createdAt).toLocaleDateString('pl-PL');

        html += `
            <div class="todo-item ${todo.completed ? 'completed' : ''}">
                <h3>${todo.title}</h3>
                ${todo.description ? '<p class="todo-desc">' + todo.description + '</p>' : ''}
                <p class="todo-date">Dodano: ${date}</p>
                <div class="todo-btns">
                    <button class="btn-done" onclick="toggleTodo(${todo.id})">
                        ${todo.completed ? 'Cofnij' : 'Zrobione'}
                    </button>
                    <button class="btn-delete" onclick="deleteTodo(${todo.id})">Usuń</button>
                </div>
            </div>
        `;
    });

    todoList.innerHTML = html;
}

// zaktualizuj licznik
function updateCount() {
    let total = todos.length;
    let active = todos.filter(t => !t.completed).length;
    document.getElementById('todoCount').textContent = '(' + total + ')';
}
