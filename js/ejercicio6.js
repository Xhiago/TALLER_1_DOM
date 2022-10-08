<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/ej6.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
       <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
        <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
		<script type="text/javascript">		


//SOLO NUMEROS
$(function(){
    $(".validarnum").keydown(function(event){
        //alert(event.keyCode);
        if((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105) && event.keyCode !==190  && event.keyCode !==110 && event.keyCode !==8 && event.keyCode !==9  ){
            return false;
        }
    });
});	

//SOLO LETRAS
$(function(){
    $(".validarlet").keydown(function(event){
        //alert(event.keyCode);
        if((event.keyCode < 65 || event.keyCode > 122) && event.keyCode !==8 && event.keyCode !==9 && event.keyCode !==32 ){
            return false;
        }
    });
});	
	</script>
	    <title>Validacion formulario</title>
</head>
<body>
</body>
    <div class="title">
        <h3>Validación de formulario</h3>
    </div>
    <form action="" class="form">
        <label for="">Tipo de documento</label>
        <select name="" id="">
            <option value="">C.C</option>
            <option value="">T.I</option>
            <option value="">Cedula de extranjeria</option>
        </select><br>
        <label for="">Numero de documento</label>
        <input type="text" placeholder="Numero de documento" class="validarnum" required><br>
        <label for="">Nombre</label>
        <input type="text" class="validarlet" required><br>
        <label for="">Apellido </label>
        <input type="text" class="validarlet" required><br>
        <label for="">Fecha de nacimiento</label>
        <input type="date" required><br>
        <label for="">Cooreo electrónico</label>
        <input type="email" required><br>
        <label for="">Contraseña</label>
        <input type="password" required><br>
        <label for="">comprobar contraseña</label>
        <input type="password" required><br><br>
        <label for="">Aceptar terminos y uso</label>
        <input type="checkbox" required>
    </form>
    <div><a href="index.html"><button class="reg btn btn-light"><h6>Volver</h6></button></a></div>

</html>