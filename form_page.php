<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST['firstname'];

    echo "<h2>Hello Worl! $name</h2>";
}
// echo "<h2>Hello World! $x</h2>";


?>
