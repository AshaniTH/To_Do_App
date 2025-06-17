<?php
header('Content-Type: application/json');

$file = 'todos.json';
$todos = json_decode(file_get_contents($file), true);
