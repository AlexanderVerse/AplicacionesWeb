<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    $password2 = $_POST['password2'];
    $usuario = "root";
    $contrasena = "";
    $servidor = "localhost";
    $baseDato = "cine";
    if ($username != "" && $password != "" && $password2 != "")
    {
        if ($password === $password2)
        {
            $conexion = mysqli_connect($servidor, $usuario, $contrasena, $baseDato) or die("NO SE HA PODIDO ACCEDER A LA BASE DE DATOS.");
            $sql = "SELECT username, password FROM usuario WHERE username = '$username'";
            $consulta = mysqli_query($conexion, $sql);
            if(mysqli_num_rows($consulta) === 0)
            {
                $sql = "INSERT INTO usuario(username, password) VALUES('$username', '$password')";
                if(mysqli_query($conexion, $sql))
                {
                    header('Location: ./../signIn.html');
                    echo "Nuevo usuario insertado";
                }
            }
            else
            {
                header('Location: ./../signUp.html'); 
                echo "El usuario ya esta registrado";
            }
        } else {
            header('Location: ./../signUp.html'); 
            echo "Las contraseñas son distintas";
        }
    }
    else
    {
        header('Location: ./../signUp.html'); 
        echo "Tienes que rellenar todos los campos";
    }
?>
