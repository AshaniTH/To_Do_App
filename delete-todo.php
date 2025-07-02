<?php
header('Content-Type: application/json');

$file = 'todos.json';
$todos = json_decode(file_get_contents($file), true);

// Get input data
$id = $_POST['id'] ?? '';

$initialCount = count($todos);
$todos = array_filter($todos, function($todo) use ($id) {
    return $todo['id'] !== $id;
});

if (count($todos) < $initialCount) {
    file_put_contents($file, json_encode(array_values($todos)));
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Todo not found']);
}
?>