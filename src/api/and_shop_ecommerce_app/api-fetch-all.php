<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');


include "db_connect.php";

if (isset($_GET['id'])) {

    $sql = "select * from products WHERE id = " . $_GET['id'];
    $result = mysqli_query($conn, $sql) or die("SQL Query Failed");
} else {

    $sql = "select * from products";
    $result = mysqli_query($conn, $sql) or die("SQL Query Failed");
}
if (mysqli_num_rows($result) > 0) {

    $output = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($output);
} else {
    echo json_encode(array('message' => 'No Record Found.', 'status' => false));
}
