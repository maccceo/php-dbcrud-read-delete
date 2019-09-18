<!DOCTYPE html>
<html lang="" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Pagamenti Hotel</title>

    <!-- FONT: LATO -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <!-- FONT: FONTAWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <!-- JS: JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- JS: MOMENT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
    <!-- JS: HANDLEBARS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
    <!-- CSS: MY STYLE -->
    <link rel="stylesheet" href="style.css">
    <!-- JS: MY SCRIPT -->
    <script src="script.js" charset="utf-8"></script>
    <!-- TEMPLATE: MESSAGE MENU -->
    <script id="item-template" type="text/x-handlebars-template">
      <div class="payment" data-id="{{id}}">
        <p>Pagamento n°{{id}}</p>
        <p>Prenotazione n°{{prenotazioni_id}} a nome di <strong>{{name}} {{lastname}}</strong></p>
        <p>Prezzo: ${{price}}</p>
        <span class="delete_payment">X</span>
      </div>
    </script>
  </head>
  <body>
  	<div id="main-container">
      <div class="type pending">
        <h3>Status: pending</h3>
      </div>
      <div class="type rejected">
        <h3>Status: rejected</h3>
      </div>
      <div class="type accepted">
        <h3>Status: accepted</h3>
      </div>
    </div>
  </body>
</html>