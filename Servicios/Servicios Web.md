### Servicios web
## SSH (Secure shell or Secure Socket Shell)
Protocolo de administración remota, controla los usuarios y modifica sus servidores remotamente a travéz del internet. El servicio fue creado para remplazar la __no__ encriptación de **Telnet**, **rlogin** y **rsh**, utiliza técnicas criptográficas para envolver la comunicación de un servidor remoto con seguridad.
Cualquier usuario Linux o macOS puede utilizar SSH dentro del servidor remoto directamente en una terminal.
Ofrece información encriptada entre dos computadoras conectadas a travez de una conexión. 
Por lo regular lo utilizan mas los administradores de red para poder controlar equipos de manera remota.
SSH se refiere tanto al protocolo de red criptográfica como al conjunto de utilidades que implementan ese protocolo. Otra cualidad es poder crear tuneles seguros para enviar información de otros protocolos y remplazó a _FTP_(File Transfer Protocol).  
Se han utilizado para asegurar muchos tipos diferentes de comunicaciones entre una máquina local y un host remoto, incluido el acceso remoto seguro a los recursos, la ejecución remota de comandos, la entrega de parches de software y actualizaciones y otras tareas administrativas o de administración. Además de crear un canal seguro entre computadoras locales y remotas, SSH se usa para administrar enrutadores, hardware de servidor, plataformas de virtualización, sistemas operativos (SO) y aplicaciones de transferencia de archivos y administración de sistemas internos.


#### Cómo utilizarlo:  

> ssh userName@dominio

```
- user es un usuario que exista en el servidor y que conocemos su contraseña.
- El "dominio" es el nombre del servidor o bien puede ser la ip.
```

El comando abre una comunicación encriptada accediendo como usuario que existe en el sistema. Le pedirá introducir la contraseña la cual no se verá en la pantalla pero esta se envia y se valida.
Utiliza tres diferentes tipo de tecnologías de encriptación:   
* Symmetrical encryption
* Asymmetrical  encryption
* Hashing

### Symmetrical encryption
La llave secreta es usada para encriptar y desencriptar mensajes de lado del cliente y el servidor. Cualquiera que contenga la contraseña puede encriptar y desencriptar un mensaje. Esto también es llamado llave compartida o secreto compartido donde solo se utiliza una llave aunque en ocasiones son dos donde una ayuda a encontrar a la otra. La clave nunca se transmite entre el cliente y el host, aunque un tercero capture la información este no podrá saber la contraseña ya que no sabe el algoritmo con el que fue creada. Una vez generada la clave toda la información entre las dos maquinas es segura. Esto incluye las contraseñas.   
Puede cifrados como AES, CAST128, BlowFish donde ambos eligen la preferencia del cifrado.

### Asimétrica encryption
Este utiliza dos llaves a fuerza, una para encriptar y otra para desincriptar. Estas son conocidas como **clave pública** y **clave secreta**.   
La clave pública es compartida a todos los clientes donde esta no puede sacar matematicamente la clave privada. Todo lo que sea encriptado con la clave pública solo puede ser desencriptada con la clave privada, eso quiere decir que ni la misma clave pública puede desencriptar lo que ha encriptado. La clave privada nunca debe ser conocida ya que es la única que puede descrifrar la información encriptada con la pública.   
A diferencia de la percepción general, el cifrado asimétrico no se utiliza para cifrar toda la sesión SSH. En cambio, solo se usa durante el algoritmo de intercambio de claves de cifrado simétrico. Antes de iniciar una conexión segura, ambas partes generan pares de claves públicas-privadas temporales y comparten sus respectivas claves privadas para producir la clave secreta compartida.

Una vez que se ha establecido una comunicación simétrica segura, el servidor utiliza la clave pública del cliente para generarla, desafiarla y transmitirla al cliente para su autenticación. Si el cliente puede descifrar con éxito el mensaje, significa que posee la clave privada requerida para la conexión. Entonces comienza la sesión SSH.

### Hashing
SSH usa hashes para verificar la autenticidad de los mensajes. Esto se realiza mediante HMAC o códigos de autenticación de mensajes basados en hash. Esto asegura que el comando recibido no sea alterado de ninguna manera.

### Cómo funciona ssh en la práctica
Opera en el puerto 22 por defecto, aunque este puede ser modificado, en el servidor
El cliente asegura una conexión simétrica segura presentando las credenciales adecuadas. Hay dos etapas en la autenticación: primero determinan que tipo de encriptación es y las credenciales son las mismas. El servidor presenta los protocolos de encriptación y sus respectivas versiones, si el cliente tiene similar las versiones se llega a un acuerdo e inicia la conexión. El servidor usa una clave pública asimétrica que cada cliente puede usar para verificar la autenticación del servidor remoto. Pasado ambos crean una llave simétrica. Este algoritmo lleva al cliente y al servidor lleguen a una clave de cifrado compartida que se usa para encriptar toda la información.




### Bibliografias
https://searchsecurity.techtarget.com/definition/Secure-Shell
https://www.cups.org/doc/network.html
https://www.hostinger.com/tutorials/ssh-tutorial-how-does-ssh-work