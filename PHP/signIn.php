<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    $usuario = "root";
    $contrasena = "";
    $servidor = "localhost";
    $baseDato = "cine";
    if ($username != "" && $password != "")
    {
        $conexion = mysqli_connect($servidor, $usuario, $contrasena, $baseDato) or die("NO SE HA PODIDO ACCEDER A LA BASE DE DATOS.");
        $sql = "SELECT password FROM usuario WHERE username = '$username'";
        $consulta = mysqli_query($conexion, $sql) or die('No se encontró nada');
        $fila = mysqli_fetch_assoc($consulta);
        echo $fila['password'];
        echo "               ";
        echo $password;
        if (strcmp($password, $fila['password']) === 0)
        {
            header('Location: ./../listBox.html');
        }
        else
        {
            echo "Las contraseñas no coinciden";
            //header('Location: ./../signIn.html');
        }
    }
    else
    {
        echo "Debes llenar todos los campos";
        //header('Location: ./../signIn.html');
    }
?>