<?php
header('Content-Type: application/json');

$conn = new mysqli('localhost', 'root', '', 'invoicing_app');

if ($conn->connect_error) {
    die(json_encode(['error' => 'Database connection failed']));
}

$result = $conn->query('SELECT * FROM invoices');

$invoices = [];
while ($row = $result->fetch_assoc()) {
    $invoices[] = $row;
}

echo json_encode($invoices);

$conn->close();
?>
