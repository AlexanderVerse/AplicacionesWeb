var validacionRojo = document.getElementById("validacionRojo")
var validacionAnaranjado = document.getElementById("validacionAnaranjado")
var validacionAmarillo = document.getElementById("validacionAmarillo")
var validacionVerde = document.getElementById("validacionVerde")
var botonValidar = document.getElementById("validar")
var contrasenaComparar = document.getElementById("contrasenaComparar")
var contrasena = document.getElementById("contrasena")
var texto = document.getElementById("texto")
var regexMayuscula = /[A-Z]+/g;
var regexMinuscula = /[a-z]+/g;
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
    botonValidar.disabled = true
}

verificarSeguridadPassword = () =>{
    let match = contrasena.value.match(regexMayuscula)
    if (match != null && comprobarCantidadCoincidencia(match, totalMayuscula))
    {
        match = contrasena.value.match(regexMinuscula)
        if (match != null && comprobarCantidadCoincidencia(match, totalMinuscula))
        {
            match = contrasena.value.match(regexNumero)
            if (match != null && comprobarCantidadCoincidencia(match, totalNumero))
            {
                match = contrasena.value.match(regexCaracter)
                if (match != null && comprobarCantidadCoincidencia(match, totalCaracter))
                {
                    console.log("Verificada")
                    colorBarraValidacion("green", 4)
                    botonValidar.disabled = false
                    contrasenaComparar.disabled = false
                    texto.innerHTML = "La contraseña es valida"
                }
                else
                {
                    
                    colorBarraValidacion("yellow", 3)
                    contrasena.focus()
                    contrasenaComparar.value = ""
                    contrasenaComparar.disabled = true
                    botonValidar.disabled = true
                    texto.innerHTML = "La contraseña debe contener al menos " + totalCaracter + " caracter: [/, +, *, ., -, _, #, $, %, &]"
                }
            }
            else
            {
                colorBarraValidacion("orange", 2)
                botonValidar.disabled = true
                contrasenaComparar.value = ""
                contrasenaComparar.disabled = true
                contrasena.focus()
                texto.innerHTML = "La contraseña debe contener al menos " + totalNumero + " números y " + totalCaracter + " carácteres."
            }
        }
        else
        {
            
            colorBarraValidacion("red", 1)
            botonValidar.disabled = true
            contrasenaComparar.value = ""
            contrasenaComparar.disabled = true
            contrasena.focus()
            texto.innerHTML = "La contraseña debe contener al menos " + totalMinuscula + " minúsculas, " + totalNumero + " números y " + totalCaracter + " carácteres."
        }
    }
    else
    {
        inicializar
        texto.innerHTML = "La contraseña debe contener al menos " + totalMayuscula + " mayúsculas, " + totalMinuscula + " minúsculas, " + totalNumero + " números y " + totalCaracter + " carácteres."
    }
}

colorBarraValidacion = (colorBarra, posicionBarra) =>
{
    arregloColorBarra = ["white", "white", "white", "white"]
    for (let index = 0; index < posicionBarra; index++)
    {
        arregloColorBarra[index] = colorBarra
    }
    validacionRojo.style.backgroundColor = arregloColorBarra[0]
    validacionAnaranjado.style.backgroundColor = arregloColorBarra[1]
    validacionAmarillo.style.backgroundColor = arregloColorBarra[2]
    validacionVerde.style.backgroundColor = arregloColorBarra[3]
}

comprobarCantidadCoincidencia = (arregloCoincidencia, cantidadCaracter) =>
{
    totalCaracterValidado = 0
    for (let index = 0; index < arregloCoincidencia.length; index++)
    {
        totalCaracterValidado += arregloCoincidencia[index].length
        if (totalCaracterValidado >= cantidadCaracter)
        {
            return true
        }
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
botonValidar.addEventListener('click', validarPassword)
inicializar()