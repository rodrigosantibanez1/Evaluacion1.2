function valiRegister() {
    var nombre = document.getElementById('nombre');
    var pass = document.getElementById('password');
    var correo = document.getElementById('correo');
    var sexoSeleccionado = document.getElementById('sexo').value;
    var numeroInput = document.getElementById('numero');

    var error_nombre = document.getElementById('error_name');
    var error_pass = document.getElementById('error_password');
    var error_correo = document.getElementById('error_correo');
    var errorNumero = document.getElementById('error_numero');
    var errorSexo = document.getElementById("error_sexo");

    error_correo.style.color = 'red';
    error_pass.style.color = 'red';
    error_nombre.style.color = 'red';
    errorNumero.style.color = 'red';
    errorSexo.style.color = 'red';
    
    var campos_vacios = [];

    if(nombre.value.trim() === '') {
        error_nombre.innerHTML = 'El nombre es obligatorio';
        campos_vacios.push('nombre');
    } else {
        error_nombre.innerHTML = '';
    }

    if(pass.value.trim() === '') {
        error_pass.innerHTML = 'La contraseña es obligatoria';
        campos_vacios.push('password');
    } else if(pass.value.length < 8) {
        error_pass.innerHTML = 'La contraseña debe tener al menos 8 caracteres';
        campos_vacios.push('password');
    } else {
        error_pass.innerHTML = '';
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if(correo.value.trim() === '') {
        error_correo.innerHTML = 'El correo electrónico es obligatorio';
        campos_vacios.push('correo');
    } else if(!emailRegex.test(correo.value)) {
        error_correo.innerHTML = 'El correo electrónico no es válido';
        campos_vacios.push('correo');
    } else {
        error_correo.innerHTML = '';
    }

    if (sexoSeleccionado === '') {
        errorSexo.innerHTML = 'Por favor, seleccione una opción en el campo de sexo';
        campos_vacios.push('sexo');
      } else {
        errorSexo.innerHTML = '';
    }

    if(numeroInput.value === '') {
        errorNumero.innerHTML = 'El número es obligatorio';
        campos_vacios.push('numero');
    } else if(isNaN(numeroInput.value)) {
        errorNumero.innerHTML = 'Solo se permiten números';
        campos_vacios.push('numero');
    } else if(numeroInput.value.length !== 11) {
        errorNumero.innerHTML = 'El número debe tener 11 dígitos sin considerar el \"+\"';
        campos_vacios.push('numero');
    } else {
        errorNumero.innerHTML = '';
    }

    if(campos_vacios.length > 0) {
        alert('Falta completar campos obligatorios: ' + campos_vacios.join(', '));
        return false;
    } else {
        return true;
    }
}