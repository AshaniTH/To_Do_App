    loadTodos();
    
    // Add new todo
    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const todoText = todoInput.value.trim();
        
        if (todoText) {
            addTodoToServer(todoText);
            todoInput.value = '';
        }
    });
      // Load todos from server
    function loadTodos() {
        fetch('todos.php')
            .then(response => response.json())
            .then(todos => {
                todoList.innerHTML = '';
                todos.forEach(todo => {
                    addTodoToDOM(todo);
                });
            });
    }
      // Add todo to DOM
    function addTodoToDOM(todo) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.dataset.id = todo.id;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', function() {
            updateTodoOnServer(todo.id, this.checked);
        });
        
        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = todo.text;
        if (todo.completed) {
            span.classList.add('completed');
        }
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            deleteTodoOnServer(todo.id);
        });
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
        // Add todo to server
    function addTodoToServer(text) {
        fetch('add-todo.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `text=${encodeURIComponent(text)}`
        })
        .then(response => response.json())
        .then(newTodo => {
            addTodoToDOM(newTodo);
        });
    }
    