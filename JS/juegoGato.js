function inicializar()
{
    canvas = document.getElementById('gato');
    ctx = canvas.getContext('2d');
    boton = document.getElementById("calcular")
    dimensionGato = document.getElementById("valor")
    nuevoJuego = document.getElementById("nuevoJuego")
    //dibujoInicio = document.getElementsByName("caracterInicio").value
    nuevoJuego.style.display = "none"
    turno = 1
    finJuego= false
}

function hacerCuadricula()
{
    //turno = dibujoInicio.value
    totalMovimiento = 0
    finJuego= false
    turno = 1 //Tal vez se tenga que quitar
    longitudLado = 100 * dimensionGato.value
    canvas.setAttribute("width", longitudLado.toString())
    canvas.setAttribute("height", longitudLado.toString())
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = '#581845'
    ctx.lineWidth = 5;
    for (let index = 1; index < dimensionGato.value; index++)
    {
        ctx.beginPath(); // Crea un nuevo trazo para poder aplicar comando de dibujo
        ctx.moveTo(100*index, 0);
        ctx.lineTo(100*index, longitudLado)
        ctx.moveTo(0, 100*index);
        ctx.lineTo(longitudLado, 100*index)
        ctx.stroke();//Dibuja el contorno de la forma, obligatorio para que aparezca el trazoctx.stroke();//Dibuja el contorno de la forma, obligatorio para que aparezca el trazo
    }
    arreglocuadricula = []
    for (let x = 0; x < dimensionGato.value; x++)
    {
        arreglocuadricula.push(new Array(dimensionGato.value, dimensionGato.value))
        for (let y = 0; y < dimensionGato.value; y++)
        {
            arreglocuadricula[x][y] = -1
        }
    }
    ctx.lineWidth = 2;
}

function dibujarX(coordenada)
{
    cuadranteX = Math.trunc(coordenada.x / 100)
    cuadranteY = Math.trunc(coordenada.y / 100)
    if(arreglocuadricula[cuadranteY][cuadranteX] == -1)
    {
        arreglocuadricula[cuadranteY][cuadranteX] = turno
        totalMovimiento += 1
        turno = 0
        ctx.strokeStyle = '#D11B16'
        ctx.beginPath();
        ctx.moveTo(10 + (100 * cuadranteX), cuadranteY * 100 + 10)
        ctx.lineTo(100 * (cuadranteX + 1) - 10, (cuadranteY + 1) * 100 - 10)
        ctx.moveTo(100 * (cuadranteX + 1) - 10, cuadranteY * 100 +10)
        ctx.lineTo(100 * cuadranteX + 10, 100 * (cuadranteY + 1) - 10)
        ctx.stroke();
    }
}

function dibujarO(coordenada)
{
    cuadranteX = Math.trunc(coordenada.x / 100)
    cuadranteY = Math.trunc(coordenada.y / 100)
    if(arreglocuadricula[cuadranteY][cuadranteX] == -1)
    {
        arreglocuadricula[cuadranteY][cuadranteX] = turno
        totalMovimiento += 1
        turno = 1
        ctx.strokeStyle = '#54BE21'
        ctx.beginPath();
        ctx.arc(50 + (100 * cuadranteX), 50 + (100 * cuadranteY), 40, 2.13, 2.14, true)
        ctx.stroke();//Dibuja el contorno de la forma, obligatorio para que aparezca el trazo
    }
}


inicializar()
boton.addEventListener('click', hacerCuadricula)
canvas.addEventListener('click', function(e)
{
    coordenada = posicionCursorCanva(canvas, e)
    if (turno == 1)
    {
        dibujarX(coordenada)
    }
    else
    {
        dibujarO(coordenada)
    }
    if (!finJuego)
    {
        estadoJuego()   
    }
})

function estadoJuego()
{
    if(totalMovimiento >= dimensionGato.value * 2 - 1)
    {
        caracterComprobar =  arreglocuadricula[dimensionGato.value - 1][0]
        caracterComprobar2 = arreglocuadricula[0][0]
        cantidadIgual = 1
        cantidadIgual2 = 1
        for (let z = 1; z < dimensionGato.value; z++)
        {
            if(arreglocuadricula[z][dimensionGato.value - z - 1] == caracterComprobar && caracterComprobar != -1)
            {
                cantidadIgual += 1
            }
            if(arreglocuadricula[z][z] == caracterComprobar2 && caracterComprobar2 != -1)
            {
                cantidadIgual2 += 1
            }
        }
        if (cantidadIgual == dimensionGato.value)
        {
            console.log("Primer entrada")
            caracterComprobar2 = -1
            finJuego = true
        }
        else if(cantidadIgual2 == dimensionGato.value)
        {
            caracterComprobar = -1
            console.log("Segunda entrada")
            finJuego = true
        }
        else
        {
            caracterComprobar2 = -1
            for (let i = 0; i < dimensionGato.value; i++)
            {
                caracterComprobar = arreglocuadricula[0][i]
                cantidadIgual = 1
                if (caracterComprobar != -1)
                {
                    for (let j = 1; j < dimensionGato.value; j++)
                    {
                        if(arreglocuadricula[j][i] != caracterComprobar)
                        {
                            break;
                        }
                        cantidadIgual += 1
                    }
                    if(cantidadIgual == dimensionGato.value)
                    {
                        finJuego = true
                        break
                    }
                }
            }
        }
        if(finJuego)
        {
            boton.disabled = true
            dimensionGato.disabled = true
            nuevoJuego.style.display = "block"
            if (caracterComprobar == 1 || caracterComprobar2 == 1)
            {
                console.log("Ganaron las x")   
            }
            else
            {
                console.log("Ganaron las O")
            }
        }
        for (let i = 0; i < dimensionGato.value; i++)
        {
            caracterComprobar = arreglocuadricula[i][0]
            cantidadIgual = 1
            if(caracterComprobar != -1)
            {
                for (let j = 1; j < dimensionGato.value; j++)
                {
                    if(arreglocuadricula[i][j] != caracterComprobar)
                    {
                        break
                    }
                    cantidadIgual += 1
                }
                if(cantidadIgual == dimensionGato.value)
                {
                    if(caracterComprobar == 1)
                    {
                        console.log("Ganaron las x horizontal")
                    }
                    else
                    {
                        console.log("Ganaron las O horizontal")
                    }
                    finJuego = true
                    boton.disabled = true
                    dimensionGato.disabled = true
                    nuevoJuego.style.display = "block"
                    break
                }
            }
        }
    }
}

function posicionCursorCanva(canvas, evt)
{
  var ClientRect = canvas.getBoundingClientRect();
  return{x: Math.round(evt.clientX - ClientRect.left), y: Math.round(evt.clientY - ClientRect.top)}
}