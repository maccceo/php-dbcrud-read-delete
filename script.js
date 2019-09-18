
$(document).ready(function() {
	
	//carica tutte le stanze
	$.ajax({
		url: "API.php",
		method: "GET",
		success: function(data) {
			printGuest(data);
		}
	});

    $(document).on("click",".delete_room",deleteRoom);
});


function printGuest(data) {
	var destinazione = $(".ospiti");

	$("li").remove();

	for (var i = 0; i < data.length; i++) {
		var stanza = data[i];
		var stampa =
			"<li data-id='" + stanza.id + "'>" +
				"<p>Numero stanza: " + stanza.room_number + "</p>" +
				"<p>Piano: " + stanza.floor + "</p>" +
				"<p>Letti: " + stanza.beds + "</p>" +
			"<button class='delete_room'>Elimina stanza</button></li>";
		//aggiungo album all'HTML
		destinazione.append(stampa);
	}
}

function deleteRoom() {
	idStanza = $(this).parent().data("id");
	$.ajax({
		url: "API_delete.php",
		method: "GET",
		data: {id: idStanza},
		success: function(data) {
			console.log("stanza eliminata:",data);
			//carica tutte le stanze
			$.ajax({
				url: "API.php",
				method: "GET",
				success: function(data) {
					printGuest(data);
				}
			});
		}
	});
}

// SELECT paganti.name, paganti.lastname, paganti.address, pagamenti.price, stanze.room_number
// FROM pagamenti
// INNER JOIN paganti
// ON pagamenti.pagante_id = paganti.id
// INNER JOIN prenotazioni
// ON pagamenti.prenotazione_id = prenotazioni.id
// INNER JOIN stanze
// ON prenotazioni.stanza_id = stanze.id