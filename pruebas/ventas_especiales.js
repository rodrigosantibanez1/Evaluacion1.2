$(document).ready(function() {
    $.get("https://fakestoreapi.com/products", function(data) {
      $.each(data, function(i, item) {
        var card = $("<div class='col' >  "+
                        "<div class='card' style='width: 18rem;' >"+
                        "<img class='card-img-top' src='"+item.image+"'height='180' width='286px' alt='Card image cap'>"+
                        "<div class='card-body'>"+
                          "<h5 class='card-title'>"+item.title+"</h5>"+
                          "<p class='card-text'>"+item.price+"</p>"+
                          "<a href='#' class='btn btn-primary'>Go somewhere</a>"+
                        "</div>"+
                     " </div></div>"
                    );
  
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
  