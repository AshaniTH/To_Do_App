<?php
header('Content-Type: application/json');
// Simple database simulation using a JSON file
$file = 'todos.json';
// Create file if it doesn't exist
if (!file_exists($file)) {
    file_put_contents($file, '[]');
}
