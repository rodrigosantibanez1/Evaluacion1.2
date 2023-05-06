$(document).ready(function (){
    $.get("https://fakestoreapi.com/products",
        function(data){
            $.each(data,function(i,item){
                $("#ventas_es").append("<tr><td>"+item.id+"</td><td>"+item.title+
                                        "</td><td>"+item.price+"</td><td><img src='"+item.image+"'></td></tr>")
            })
        });
});