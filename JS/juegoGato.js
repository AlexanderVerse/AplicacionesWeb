function inicializar()
{
    canvas = document.getElementById('gato');
    ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    boton = document.getElementById("calcular")
    dimensionGato = document.getElementById("valor")
}

function hacerCuadricula()
{
    medidaCuadricula = 0
    longitudLado = 100 * dimensionGato.value
    canvas.setAttribute("width", longitudLado.toString())
    canvas.setAttribute("height", longitudLado.toString())
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath(); // Crea un nuevo trazo para poder aplicar comando de dibujo
    for (let index = 1; index < dimensionGato.value; index++)
    {
        ctx.moveTo(100*index, 0);
        ctx.lineTo(100*index, longitudLado)
        ctx.moveTo(0, 100*index);
        ctx.lineTo(longitudLado, 100*index)
    }
    ctx.stroke();//Dibuja el contorno de la forma, obligatorio para que aparezca el trazoctx.stroke();//Dibuja el contorno de la forma, obligatorio para que aparezca el trazo
    dibujarX()
    //dibujarO()
}

function dibujarX(params)
{
    for (let i = 0; i < dimensionGato.value; i++)
    {
        for (let j = 0; j < dimensionGato.value; j++)
        {
            ctx.moveTo(10 + (100 * i), j * 100 + 10)
            ctx.lineTo(100 * (i + 1) - 10, (j + 1) * 100 - 10)
            ctx.moveTo(100 * (i + 1) - 10, j * 100 +10)
            ctx.lineTo(100 * i + 10, 100 * (j + 1) - 10)
        }
    }
    ctx.stroke();//Dibuja el contorno de la forma, obligatorio para que aparezca el trazo
}

function dibujarO(params)
{
    
    for(let x = 0; x < dimensionGato.value; x++)
    {
       for (let y = 0; y < dimensionGato.value; y++)
       {
            ctx.beginPath();
            ctx.arc(50 + (100 * x), 50 + (100 * y), 40, 2.13, 2.14, true)
            ctx.stroke();//Dibuja el contorno de la forma, obligatorio para que aparezca el trazo
       }
    }
}


inicializar()
boton.addEventListener('click', hacerCuadricula)