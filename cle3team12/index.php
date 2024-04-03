<?php
/** @var mysqli $db */

// Setup connection with database
require_once 'includes/database.php';

// Select all the albums from the databasex1
$query = "SELECT * FROM kunstwerken";

// Store the albums in an array
$result = mysqli_query($db, $query)
or die('Error ' . mysqli_error($db) . ' with query ' . $query);
$bezoekingen = [];
while ($row = mysqli_fetch_assoc($result)) {
    $bezoekingen[] = $row;
}

// Close the connection
mysqli_close($db);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mindmate</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/quagga/0.12.1/quagga.min.js"></script>
    <script src="javascript/main.js"></script>
</head>
<body>
    <header>
        <h1 id="headerTitle">Mind-Mate</h1>
        <h4 id="headerBio">Stel Uw Vraag Door Te Praten</h4>
    </header>
    <main>
        <h3 id="mainBio">Druk Op Start</h3>

        <button id="scanButton">Start</button>
        <video id="video" playsinline></video>
    </main>
</body>
</html>