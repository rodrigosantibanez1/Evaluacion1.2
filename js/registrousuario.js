var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var error = document.getElementById('error');
error.style.color = 'red';

var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
        console.log('Enviando formulario...');
        
        evt.preventDefault();

        var mensajeError = [];

        if(nombre.value === null || nombre.value === ''){
            mensajeError.push('Ingresa tu nombre');
        }
    
        if(apellido.value === null || apellido.value === ''){
            mensajeError.push('Ingresa tu apellido');
        }
        
        if(txt_rut.value === null || txt_rut.value === ''){
            mensajeError.push('Ingresa tu rut');
        }

        error.innerHTML = mensajeError.join(' , ');

        var Fn = {
            // Valida el rut con su cadena completa "XXXXXXXX-X"
            validaRut : function (rutCompleto) {
                rutCompleto = rutCompleto.replace("‐","-");
                if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
                    return false;
                var tmp 	= rutCompleto.split('-');
                var digv	= tmp[1]; 
                var rut 	= tmp[0];
                if ( digv == 'K' ) digv = 'k' ;
                
                return (Fn.dv(rut) == digv );
            },
            dv : function(T){
                var M=0,S=1;
                for(;T;T=Math.floor(T/10))
                    S=(S+T%10*(9-M++%6))%11;
                return S?S-1:'k';
            }
        }
        
        
        $("#btnvalida").click(function(){
            if (Fn.validaRut( $("#txt_rut").val() )){
                $("#msgerror").html("El rut ingresado es válido :D");
            } else {
                $("#msgerror").html("El Rut no es válido :'( ");
            }
        });
    
    });