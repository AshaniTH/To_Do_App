<?php
header('Content-Type: application/json');

$file = 'todos.json';
$todos = json_decode(file_get_contents($file), true);
// Get input data
$id = $_POST['id'] ?? '';
$completed = isset($_POST['completed']) ? (bool)$_POST['completed'] : false;

$success = false;

foreach ($todos as &$todo) {
    if ($todo['id'] === $id) {
        $todo['completed'] = $completed;
        $success = true;
        break;
    }
}

if ($success) {
    file_put_contents($file, json_encode($todos));
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Todo not found']);
}
?>