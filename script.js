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
    