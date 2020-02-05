function nuevojuego()
{
    console.log("sURRENDER")
    numIntento = 0
    numAleatorio = Math.round(Math.random()*100)
    numAleatorio =  numAleatorio.toString()
    nuevoJuego.style.display = "none"
    botonProbar.disabled = false
    document.getElementById("numeroInsertado").disabled = false
    tituloIntento.style.display = "none"
    arregloNumero.innerHTML = ""
    descripcion.style.display = "none"
    mensaje.style.display = "none"
}

function inicializarPagina()
{
    arregloNumero = document.getElementById("arregloNumero")
    descripcion = document.getElementById("descripcion")
    mensaje = document.getElementById("mensaje")
    tituloIntento = document.getElementById("TituloIntento")
    nuevoJuego = document.getElementById("nuevoJuego")
    numeroIntento = document.getElementById("numeroIntento")
    botonProbar = document.getElementById("botonProbar")
    arregloNumero.style.display = "none"
    descripcion.style.display = "none"
    mensaje.style.display = "none"
    tituloIntento.style.display = "none"
    nuevoJuego.style.display = "none"
    numAleatorio = Math.round(Math.random()*100)
    numAleatorio =  numAleatorio.toString()
}

inicializarPagina();

numIntento = 0;
function jugar()
{
    if(numIntento == 0)
    {
        arregloNumero.style.display = "block"
        descripcion.style.display = "block"
        mensaje.style.display = "block"
        tituloIntento.style.display = "block"
        tituloIntento.innerHTML = "Números incorrectos insertados"
    }
    numeroInsertado = document.getElementById("numeroInsertado").value
    numeroInsertadoTexto = document.createTextNode(" " + numeroInsertado);
    if( numeroInsertado == numAleatorio)
    {
        descripcion.innerHTML = "Acertaste al número aleatorio"
        descripcion.style.backgroundColor = '#7BBB6A'
        mensaje.style.backgroundColor = '#7BBB6A'
        mensaje.innerHTML = "!ACERTASTE¡"
        document.getElementById("numeroInsertado").disabled = true
        nuevoJuego.style.display = "block"
        botonProbar.disabled = true
    }
    else
    {
        numIntento += 1
        if(numIntento < 6)
        {
            if(numeroInsertado > numAleatorio)
            {
                descripcion.innerHTML = "Prueba con un número menor"
            }
            else
            {
                descripcion.innerHTML = "Prueba con un número mayor"
            }
            descripcion.style.backgroundColor = "yellow"
            descripcion.style.color = "black"
            mensaje.style.backgroundColor = 'red'
            mensaje.innerHTML = "! Fallaste ¡"
            arregloNumero.appendChild(numeroInsertadoTexto)
        }
        else
        {
            descripcion.style.color = "white"
            descripcion.innerHTML = "PERDISTE EL JUEGO"
            descripcion.style.backgroundColor = 'red'
            mensaje.style.backgroundColor = 'red'
            mensaje.innerHTML = "!GAME OVER¡"
            document.getElementById("numeroInsertado").disabled = true
            nuevoJuego.style.display = "block"
            botonProbar.disabled = true
        }
    }
}
