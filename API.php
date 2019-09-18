<?php 

    include ('API_header.php');

    $query = "
        SELECT pagamenti.id, pagamenti.price, pagamenti.status, paganti.name, paganti.lastname, prenotazioni.id AS 'prenotazioni_id'
        FROM `pagamenti`
        INNER JOIN paganti
        ON pagamenti.pagante_id =paganti.id
        INNER JOIN prenotazioni
        ON pagamenti.prenotazione_id = prenotazioni.id  
        WHERE pagamenti.id >= 100
    ";

    //oggetto complesso con anche i risultati dell'API
    $res = $conn -> query($query);

    // se mySQL ha passato qualcosa e ha delle righe procedi
    if ($res && $res -> num_rows > 0) {

        $results = [];

        // "$res -> fetch_assoc()" passa alla riga successiva, lo fa a fine while
        // se row esiste procedi 
        while($row = $res -> fetch_assoc()) {
            // aggiungo le righe ai risultati
            $results[] = $row;
        }
    }

    // chiudi sessione per evitare x problemi
    $conn->close();

    // spedisci i dati come comodo oggetto JSON
    echo json_encode($results);

 ?>


