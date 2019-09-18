
$(document).ready(function() {
	//carica i pagamenti
	getPayment();

	//elimina pagamenti
    $(document).on("click",".delete_payment",deletePayment);
});




function getPayment() {
	//elimino quello che c'era prima
	$(".payment").remove();

	// chiedo quelli aggiornati
	$.ajax({
		url: "API_read.php",
		method: "GET",
		success: function(data) {
			printPayment(data);
		}
	});
}


function deletePayment() {
	idPayment = $(this).parent().data("id");

	$.ajax({
		url: "API_delete.php",
		method: "GET",
		data: {id: idPayment},
		success: function(data) {
			console.log("pagamento eliminato:",data);
			// aggiorna pagamenti visualizzati
			getPayment();
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

// QUERY PER INSERIMENTO DATI PRIVI DI VINCOLI: 

// INSERT INTO pagamenti (id, status, price, prenotazione_id, pagante_id) 
// VALUES 
//   (100, 'pending', 300, 1, 6), 
//   (101, 'pending', 545, 13, 16), 
//   (102, 'rejected', 120, 1, 1), 
//   (103, 'rejected', 1000, 7, 6), 
//   (104, 'accepted', 1200, 25, 29), 
//   (105, 'accepted', 980, 13, 4)