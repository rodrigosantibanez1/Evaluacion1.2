$(document).ready(function() {
    $.get("https://fakestoreapi.com/products", function(data) {
      $.each(data, function(i, item) {
        var card = $("<div class='card'><img src='" + item.image + "'>" +
                     "<div class='container'><p>" + item.id + "-. <b>Nombre:</b> " +
                     item.title + "</p><p><b>Precio:</b> " + item.price + "</p></div></div>");
  
        card.click(function() {
          var detalle = $("<div><h2>" + item.title + "</h2> <button class='close'>X</button><p><b>Descripción:</b> " +
                          item.description + "</p><p><b>Categoría:</b> " + item.category +
                          "</p><p><b>Rating:</b> " + item.rating.rate + " (" + item.rating.count +
                          " votos)</p></div>");
          $(".aside-container").html(detalle);
          
          detalle.find('.close').click(function() {
            $(".aside-container").empty();
          });
        });
  
        $("#ventas_es").append(card);
      });
    });
  });
  