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