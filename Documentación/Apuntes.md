Con javaScript puedes obtener un elemento HTML a travez del id, de la clase, de la etiqueta misma y asi cambiar sus propiedades como lo pueden ser caractarísticas HTML o diseño con CSS.  
Ejemplo:
> - var elementoHtml = document.getElementById("idElemento") //Busca el elemento con id "idElemento"  
> - var elementosClase = document.getElementByName("name") // obtiene las etiquetas que tengan como nombre "name".  
> - var etiqueta = document.getsElementByTagName("p") // Toma todas las etiquetas que sean "p"
> - var estilo = document.querySelector(".enlace") // Busca en la página el primer elemento que contenga esa clase aunque haya varios.

## Eventos en las etiquetas HTML
|Evento|Descripción|
|------|-----------|
|onblur|Deseleccionar el elemento|
|onchange|Deseleccionar un elemento que a sido modificado|
|onclick|Pinchar y soltar el ratón|
|ondbclick|Pinchar dos veces el ratón|
|onfocus|Seleccionar un elemento|
|onkeydown|Pulsar una tecla(sin soltarla)|
|onkeypress|Pulsar una tecla|
|onkeyup|Soltar una tecla pulsada|
|onmousedown|Pulsar(sin soltar) un botón del ratón|
|onmousemove|Mover el ratón|
|onmouseout|El ratón sale del elemento|
|onmouseover|El ratón entra en el elemento|
|onmouseup|Soltar el botón que estaba pulsado en el ratón|