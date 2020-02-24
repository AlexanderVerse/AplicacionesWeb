var estado = document.getElementById("estado")
var ciudad = document.getElementById("ciudad")
var cine = document.getElementById("cine")
var estados = ["Puebla", "Jalisco", "Ciudad de México", "Monterrey", "Aguascalientes"]
var ciudades = {"Puebla": ["Amozoc", "Atlixco", "Puebla"], "Jalisco":["Guadalajara", "Zapopan", "Arandas"], "Ciudad de México": ["Álvaro Obregón", "Benito Juárez", "Iztacalco"], "Monterrey":["Allende", "Galeana", "Monterrey"], "Aguascalientes":["Calvillo", "Tepezalá", "El llano"]}
var cines = {"Amozoc": ["Cinepolis", "Cinemagic", "Cinemex"], "Atlixco": ["CineMagic", "Cinepolis", "Topolino"], "Puebla": ["Cinemex", "Cinepolis", "Cinemex Loreto"], "Guadalajara": [" Cinepolis independencia", "Cinépolis Alameda", "Cinépolis la gran Plaza"], "Zapopan":["Cinépolis gran Teraza Belenes", "Cinépolis Real Center", "Cinemex plaza Patria"], "Arandas":["Plaza San Javier"], "Álvaro Obregón": ["Cinépolis", "Cinemex Plaza Loreto", "Cinemex Patio Revoluction"], "Benito Juárez": ["Cineteca Nacional de México", "Cinemex Platino", "Cinemex Premium Torre Manacar"], "Iztacalco": ["Cinemex La Viga", "Cinépolis Plaza Central", "Cinemex Iztapalapa"], "Allende": ["Cinemex Plaza Real Monterrey", "Rio Cinemas Cuauhtémoc", "Cinemex La Silia"], "Galeana": ["Cinemex Centrika", "Cinemex Leones", "Cinemex San Nicolás"], "Monterrey": ["Cinépolis VIP Galerías Monterrey", "Cinépolis Interplaza", "Cinépolis Garza Sada"], "Calvillo": ["Intercinemas Calvillo"], "Tepezalá": ["Cineméx Rincón de Romos", "Cinépolis Altaria", "Cinépolis Aguascalientes"], "El llano": ["Cinépolis Altaria", "Cinépolis Aguascalientes sur", "Sala Alternativa"]}


function inicializar()
{
    let opcion
    for (let index = 0; index < estados.length; index++)
    {
        opcion = document.createElement("option")
        opcion.text = estados[index];
        estado.add(opcion)
    }
}


mostrarCiudades = () =>{
    let opcion
    limpiarListBox(ciudad)
    limpiarListBox(cine)
    opcion = document.createElement("option")
    opcion.text = ""
    ciudad.add(opcion)
    for (let index = 0; index < ciudades[estado.value].length; index++)
    {
        opcion = document.createElement("option")
        opcion.text = ciudades[estado.value][index]
        ciudad.add(opcion)
    }
}

mostrarCines = () =>{
    let opcion
    limpiarListBox(cine)
    opcion = document.createElement("option")
    opcion.text = ""
    cine.add(opcion)
    for (let index = 0; index < cines[ciudad.value].length; index++)
    {
        opcion = document.createElement("option")    
        opcion.text = cines[ciudad.value][index]
        cine.add(opcion)
    }
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
inicializar()