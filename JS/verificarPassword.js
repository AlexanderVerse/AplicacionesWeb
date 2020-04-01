var validacionRojo = document.getElementById("validacionRojo")
var validacionAnaranjado = document.getElementById("validacionAnaranjado")
var validacionAmarillo = document.getElementById("validacionAmarillo")
var validacionVerde = document.getElementById("validacionVerde")
//var botonValidar = document.getElementById("validar")
var contrasenaComparar = document.getElementById("contrasenaComparar")
var contrasena = document.getElementById("contrasena")
var texto = document.getElementById("texto")
var regexMayuscula = /[A-Z]/g;
var regexMinuscula = /[a-z]/g;
var regexNumero = /[0-9]/g;
var regexCaracter = /[\/\+\*\.\-\_\#\$\%\&]/g;
var totalMayuscula = 3
var totalMinuscula = 3
var totalNumero = 3
var totalCaracter = 3

inicializar = () => {
    colorBarraValidacion("white", 0)
    contrasena.value = ""
    contrasena.focus()
    contrasenaComparar.disabled = true
    contrasenaComparar.value = ""
    //botonValidar.disabled = true
}

verificarSeguridadPassword = () =>{
    mensajePassword = ""
    bloquesColor = 4
    if (comprobarCantidadCoincidencia(regexMayuscula, contrasena.value, totalMayuscula) && comprobarCantidadCoincidencia(regexMinuscula, contrasena.value, totalMinuscula) && comprobarCantidadCoincidencia(regexNumero, contrasena.value, totalNumero) && comprobarCantidadCoincidencia(regexCaracter, contrasena.value, totalCaracter))
    {
        console.log("Verificada")
        colorBarraValidacion(bloquesColor)
        //botonValidar.disabled = false
        contrasenaComparar.disabled = false
        texto.innerHTML = "La contraseña es valida"
    }
    else
    {
        if (!comprobarCantidadCoincidencia(regexMayuscula, contrasena.value, totalMayuscula))
        {
            mensajePassword += "<br> Debe contener al menos 3 mayúsculas "
            bloquesColor -= 1
        }
        if (!comprobarCantidadCoincidencia(regexMinuscula, contrasena.value, totalMinuscula))
        {
            mensajePassword += "<br> Debe contener al menos 3 minúsculas "
            bloquesColor -= 1
        }
        if(!comprobarCantidadCoincidencia(regexNumero, contrasena.value, totalNumero))
        {
            mensajePassword += "<br> Debe contener al menos 3 números "
            bloquesColor -= 1
        }
        if(!comprobarCantidadCoincidencia(regexCaracter, contrasena.value, totalCaracter))
        {
            mensajePassword += "<br> Debe contener al menos 3 caracteres : [/, +, *, ., -, _, #, $, %, &]"
            bloquesColor -= 1
        }
        colorBarraValidacion(bloquesColor)
        contrasenaComparar.value = ""
        contrasenaComparar.disabled = true
        texto.innerHTML = "La contraseña debe contener al menos :" + mensajePassword
        //botonValidar.disabled = true
    }
}

colorBarraValidacion = (bloquesPintar) =>
{
    validacionRojo.style.backgroundColor = "white"
    validacionAnaranjado.style.backgroundColor = "white"
    validacionAmarillo.style.backgroundColor = "white"
    validacionVerde.style.backgroundColor = "white"
    if (bloquesPintar === 1)
    {
        validacionRojo.style.backgroundColor = "red"
    }
    else if(bloquesPintar === 2)
    {
        validacionRojo.style.backgroundColor = "orange"
        validacionAnaranjado.style.backgroundColor = "orange"
    }
    else if(bloquesPintar === 3)
    {
        validacionRojo.style.backgroundColor = "yellow"
        validacionAnaranjado.style.backgroundColor = "yellow"
        validacionAmarillo.style.backgroundColor = "yellow"
    }
    else if(bloquesPintar === 4)
    {
        validacionRojo.style.backgroundColor = "green"
        validacionAnaranjado.style.backgroundColor = "green"
        validacionAmarillo.style.backgroundColor = "green"
        validacionVerde.style.backgroundColor = "green"
    }
}

comprobarCantidadCoincidencia = (regex, cadenaEvaluar, cantidadCaracter) =>
{
    let match = cadenaEvaluar.match(regex)
    if (match != null && match.length >= cantidadCaracter)
    {
        return true
    }
    return false
}

validarPassword = () =>
{
    if (contrasena.value === contrasenaComparar.value)
    {
        alert("¡Felicidades! Contraseña esta de alta")
        inicializar
    }
    else
    {
        texto.innerHTML = "Las contraseñas no son las mismas, inténtalo de nuevo"
    }
}



contrasena.addEventListener('input', verificarSeguridadPassword)
//botonValidar.addEventListener('click', validarPassword)
inicializar()