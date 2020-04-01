var estado = document.getElementById("estado")
var ciudad = document.getElementById("ciudad")
var cine = document.getElementById("cine")
var pelicula = document.getElementById("pelicula")
var boletoAdulto = document.getElementById("adultoInput")
var boletoNino = document.getElementById("ninoInput")
var formulario = document.getElementById("formulario")
var botonComprar = document.getElementById("comprarBoleto")
var estados = ["Puebla", "Jalisco", "Ciudad de México", "Monterrey", "Aguascalientes"]
var ciudades = {"Puebla": ["Amozoc", "Atlixco", "Puebla"], "Jalisco":["Guadalajara", "Zapopan", "Arandas"], "Ciudad de México": ["Álvaro Obregón", "Benito Juárez", "Iztacalco"], "Monterrey":["Allende", "Galeana", "Monterrey"], "Aguascalientes":["Calvillo", "Tepezalá", "El llano"]}
var cines = {"Amozoc": ["Cinepolis", "Cinemagic", "Cinemex"], "Atlixco": ["CineMagic", "Cinepolis", "Topolino"], "Puebla": ["Cinemex", "Cinepolis", "Cinemex Loreto"], "Guadalajara": [" Cinepolis independencia", "Cinépolis Alameda", "Cinépolis la gran Plaza"], "Zapopan":["Cinépolis gran Teraza Belenes", "Cinépolis Real Center", "Cinemex plaza Patria"], "Arandas":["Plaza San Javier"], "Álvaro Obregón": ["Cinépolis", "Cinemex Plaza Loreto", "Cinemex Patio Revoluction"], "Benito Juárez": ["Cineteca Nacional de México", "Cinemex Platino", "Cinemex Premium Torre Manacar"], "Iztacalco": ["Cinemex La Viga", "Cinépolis Plaza Central", "Cinemex Iztapalapa"], "Allende": ["Cinemex Plaza Real Monterrey", "Rio Cinemas Cuauhtémoc", "Cinemex La Silia"], "Galeana": ["Cinemex Centrika", "Cinemex Leones", "Cinemex San Nicolás"], "Monterrey": ["Cinépolis VIP Galerías Monterrey", "Cinépolis Interplaza", "Cinépolis Garza Sada"], "Calvillo": ["Intercinemas Calvillo"], "Tepezalá": ["Cineméx Rincón de Romos", "Cinépolis Altaria", "Cinépolis Aguascalientes"], "El llano": ["Cinépolis Altaria", "Cinépolis Aguascalientes sur", "Sala Alternativa"]}
var peliculas = {"Cinepolis": ["El llamado salvaje", "El aro", "Buscando justicia"], "Cinemagic": ["Descarga siniestra", "Buscando la felicidad", "Atrápame si puedes"], "Cinemex": ["Las olas", "Sonic", "Parásitos"]}
var total = 0
var subtotal = 0
var iva = 0

function inicializar()
{
    let opcion
    for (let index = 0; index < estados.length; index++)
    {
        opcion = document.createElement("option")
        opcion.text = estados[index];
        estado.add(opcion)
    }
    mostrarFormulario(false)
}

mostrarFormulario = (disable) =>
{
    if (disable)
    {
        formulario.style.display = 'block'
    }
    else
    {
        boletoAdulto.value = ""
        boletoNino.value = ""
        formulario.style.display = 'none'
    }
}


mostrarCiudades = () =>{
    limpiarListBox(ciudad)
    limpiarListBox(cine)
    let opcion = document.createElement("option")
    opcion.text = ""
    ciudad.add(opcion)
    mostrarFormulario(false)
    for (let index = 0; index < ciudades[estado.value].length; index++)
    {
        opcion = document.createElement("option")
        opcion.text = ciudades[estado.value][index]
        ciudad.add(opcion)
    }
}

mostrarCines = () =>{
    limpiarListBox(cine)
    let opcion = document.createElement("option")
    opcion.text = ""
    cine.add(opcion)
    mostrarFormulario(false)
    for (let index = 0; index < cines[ciudad.value].length; index++)
    {
        opcion = document.createElement("option")    
        opcion.text = cines[ciudad.value][index]
        cine.add(opcion)
    }
}

mostrarPelicula = () =>{
    let opcion = document.createElement("option")
    opcion.text = ""
    pelicula.add(opcion)
    limpiarListBox(pelicula)
    mostrarFormulario(true)
    for (let index = 0; index < peliculas[cine.value].length; index++)
    {
        opcion = document.createElement("option")    
        opcion.text = peliculas[cine.value][index]
        pelicula.add(opcion)
    }
}

generarCobroBoleto = ()=>{
    subtotal = boletoAdulto.value + boletoNino.value
    iva = subtotal * .16
    total = subtotal + iva
}

crearCodigoBarra = () => {
    let fecha = new Date();
    let numeroAleatorio = (Math.floor(Math.random() * 1000000) + 1)
    generarCobroBoleto
    codigoBarra = "" + estado.value.substr(0,2) + ciudad.value.substr(0,2) + fecha.getDay() + fecha.getMonth() + fecha.getFullYear() + total.toString() + pelicula.value.substr(0,2) + numeroAleatorio
    codigoBarra = hex_md5(codigoBarra);
    console.log("Código de barras: " + codigoBarra)
}

limpiarListBox = (idSelect) =>{
    while (true)
    {
        if (idSelect.length > 0)
        {
            idSelect.remove(idSelect.length-1);
        }
        else
        {
            break
        }
    }
}

estado.addEventListener('change', mostrarCiudades)
ciudad.addEventListener('change', mostrarCines)
cine.addEventListener('change', mostrarPelicula)
botonComprar.addEventListener('click', crearCodigoBarra)
inicializar()