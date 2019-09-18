
$(document).ready(function() {

	//carica i pagamenti
	getPayment();

    // $(document).on("click",".delete_room",deleteRoom);
});

function getPayment() {
	$.ajax({
		url: "API.php",
		method: "GET",
		success: function(data) {
			printPayment(data);
		}
	});
}

function printPayment(data) {
	// init handlebars
	var source   = document.getElementById("item-template").innerHTML;
	var template = Handlebars.compile(source);

	for (var i in data) {
		var payment = data[i];
		// creo template coi dati
		var html = template(payment);
		// li aggiungo alla pagina
		$("." + payment.status).append(html);
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