<?php 
    include ('API_header.php');

    $id = $_GET['id'];

    $query = "
        DELETE FROM pagamenti
        WHERE id = " . $id . "
    ";

    // Console.logga la query prima di effettivamente inviarla
    // echo json_encode(["query" => $query]);

    //invio query, esito operazione T/F salvato in $res
    $res = $conn -> query($query);

    // chiudi sessione per evitare x problemi
    $conn->close();

    // spedisci i dati come comodo oggetto JSON
    echo json_encode($res);
 ?>


