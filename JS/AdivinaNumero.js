function inicializarPagina()
{
    numeroInsertado = document.getElementById("numeroInsertado")
    numeroInsertado.value = ""
    numeroInsertado.focus()
    botonProbar = document.getElementById("botonProbar")
    numeroIntento = document.getElementById("numeroIntento")
    numeroIntento.innerHTML = "Intentos: 0"
    tituloIntento = document.getElementById("TituloIntento")
    tituloIntento.innerHTML = "Números incorrectos insertados"
    arregloNumero = document.getElementById("arregloNumero")
    descripcion = document.getElementById("descripcion")
    descripcion.style.backgroundColor = "yellow"
    descripcion.style.color = "black"
    mensaje = document.getElementById("mensaje")
    nuevoJuego = document.getElementById("nuevoJuego")
    nuevojuego()
}

function nuevojuego()
{
    numIntento = 0
    numAleatorio = Math.round(Math.random()*100)
    botonProbar.disabled = false
    numeroInsertado.disabled = false
    numeroIntento.innerHTML = "Intentos: 0"
    numeroInsertado.focus()
    tituloIntento.style.display = "none"
    arregloNumero.style.display = "none"
    arregloNumeroInsertado = []
    descripcion.style.display = "none"
    descripcion.style.backgroundColor = "#FFEC43"
    descripcion.style.color = "black"
    mensaje.style.display = "none"
    nuevoJuego.style.display = "none"
}

function jugar()
{
    numeroInsertadoEntero = parseInt(numeroInsertado.value)
    if(numIntento == 0)
    {
        tituloIntento.style.display = "block"
        arregloNumero.style.display = "block"
        descripcion.style.display = "block"
        mensaje.style.display = "block"
    }
    if( numeroInsertadoEntero != numAleatorio)
    {
        numIntento += 1
        numeroIntento.innerHTML = "Intentos: " + numIntento
        band = false
        for (let index = 0; index < arregloNumeroInsertado.length; index++)
        {
            if(arregloNumeroInsertado[index] == numeroInsertadoEntero)
            {
                band = true
            }
        }
        if(numIntento == 6)
        {
            arregloNumeroInsertado.push(numeroInsertadoEntero)
            numeroInsertado.disabled = true
            botonProbar.disabled = true
            mensaje.innerHTML = "!GAME OVER¡"
            descripcion.style.color = "white"
            descripcion.innerHTML = "ACABAS DE PERDER"
            descripcion.style.backgroundColor = 'red'
            nuevoJuego.style.display = "block"
        }
        else
        {
            if(!band)
            {
                arregloNumeroInsertado.push(numeroInsertadoEntero)
                if(numeroInsertadoEntero > numAleatorio)
                {
                    descripcion.innerHTML = "Prueba con un número menor"
                }
                else
                {
                    descripcion.innerHTML = "Prueba con un número mayor"
                }
                mensaje.innerHTML = "!Fallaste¡"
                arregloNumero.innerHTML = arregloNumeroInsertado
            }
            else
            {
                mensaje.innerHTML = "!Advertencia¡"
                descripcion.innerHTML = "Has repetido un número que ya se insertó"
            }
            numeroInsertado.focus()
        }
        mensaje.style.backgroundColor = 'red'
        numeroInsertado.value = ""
    }
    else
    {
        numeroInsertado.value = ""
        numeroInsertado.disabled = true
        botonProbar.disabled = true
        mensaje.style.backgroundColor = '#7BBB6A'
        mensaje.innerHTML = "!ACERTASTE¡"
        descripcion.style.backgroundColor = '#7BBB6A'
        descripcion.style.color = 'white'
        descripcion.innerHTML = "-> ACABAS DE GANAR <-"
        nuevoJuego.style.display = "block"
    }
}

inicializarPagina();
i = 0;
numIntento = 0;
arregloNumeroInsertado = []