function valiRegister(){
    var nombre = document.getElementById('nombre');
    var pass = document.getElementById('password');
    var correo = document.getElementById('correo');
    var error_nombre = document.getElementById('error_name');
    var error_pass = document.getElementById('error_password');
    var error_correo = document.getElementById('error_correo');
    error_correo.style.color = 'red';
    error_pass.style.color = 'red';
    error_nombre.style.color = 'red';
    var campos_vacios = [];

    if (nombre.value === '') {
        campos_vacios.push('Nombre');
        error_nombre.innerHTML = '(El nombre es obligatorio)';
    } else {
        error_nombre.innerHTML = '';
    }

    if (pass.value === '') {
        campos_vacios.push('Contraseña');
        error_pass.innerHTML = '(La contraseña es obligatoria)';
    } else if (pass.value.length < 8) {
        campos_vacios.push('Contraseña');
        error_pass.innerHTML = '(La contraseña debe tener al menos 8 caracteres)';
    } else {
        error_pass.innerHTML = '';
    }

    if (correo.value === '') {
        campos_vacios.push('Correo');
        error_correo.innerHTML = '(El correo es obligatorio)';
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo.value)) {
        campos_vacios.push('Correo');
        error_correo.innerHTML = '(Ingrese un correo electrónico válido)';
    } else {
        error_correo.innerHTML = '';
    }

    if (campos_vacios.length > 0) {
        alert('Los siguientes campos son obligatorios: ' + campos_vacios.join(', '));
        return false;
    } else {
        return true;
    }
}
