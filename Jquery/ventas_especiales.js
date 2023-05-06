$(document).ready(function (){
    $.get("https://fakestoreapi.com/products",
        function(data){
            $.each(data,function(i,item){
                $("#ventas_es").append("<div class='card'><img src='"+item.image+"'>"+
                                            "<div class='container'><p>"+
                                            item.id+"-. <b>Nombre:</b> "+item.title+"</p>"+
                                            "<p><b>Precio:</b> "+item.price+
                                            "</p></div></div>")
            })
        });
});