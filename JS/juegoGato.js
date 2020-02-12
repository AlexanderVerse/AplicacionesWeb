function inicializar()
{
    canvas = document.getElementById('gato');
    ctx = canvas.getContext('2d');
    boton = document.getElementById("calcular")
    dimensionGato = document.getElementById("valor")
    turno = 1
}

function hacerCuadricula()
{
    medidaCuadricula = 0
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
    if(arreglocuadricula[cuadranteX][cuadranteY] == -1)
    {
        turno = 0
        ctx.strokeStyle = '#D11B16'
        arreglocuadricula[cuadranteX][cuadranteY] = turno
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
    if(arreglocuadricula[cuadranteX][cuadranteY] == -1)
    {
        turno = 1
        arreglocuadricula[cuadranteX][cuadranteY] = turno
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
    coordenada = oMousePos(canvas, e)
    if (turno == 1)
    {
        dibujarX(coordenada)
    }
    else
    {
        dibujarO(coordenada)
    }
})

function oMousePos(canvas, evt)
{
  var ClientRect = canvas.getBoundingClientRect();
    return{x: Math.round(evt.clientX - ClientRect.left), y: Math.round(evt.clientY - ClientRect.top)}
}