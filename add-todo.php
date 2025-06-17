<?php
header('Content-Type: application/json');

$file = 'todos.json';
$todos = json_decode(file_get_contents($file), true);
// Get input data
$text = $_POST['text'] ?? '';

if (!empty($text)) {
    // Create new todo
    $newTodo = [
        'id' => uniqid(),
        'text' => $text,
        'completed' => false,
        'created_at' => date('Y-m-d H:i:s')
    ];
      // Add to array
    $todos[] = $newTodo;
     // Save back to file
    file_put_contents($file, json_encode($todos));
    
    // Return the new todo
    echo json_encode($newTodo);
} else {
    echo json_encode(['error' => 'No text provided']);
}
?>