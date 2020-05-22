<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Crear comic</title>
  </head>
   
  <body>

	<div class="container mt-3">
		<h1>Formulario para crear un Comic</h1>

<!-- action="ApiInsertComic" -->

		<form method="POST">
			<div class="form-group">
				<label for="id">Id Comic</label>
				<input type="text" class="form-control" id="id" name="id">
			</div>

			<div class="form-group">
				<label for="nombre">Nombre</label>
				<input type="text" class="form-control" id="nombre" name="nombre">
			</div>

			<div class="form-group">
				<label for="titulo">Titulo</label>
				<input type="text" class="form-control" id="titulo" name="titulo">
			</div>

			<div class="form-group">
				<label for="num">Num</label>
				<input type="text" class="form-control" id="num" name="num">
			</div>

			<div class="form-group">
				<label for="fecha_publicacion">Fecha_publicacion</label>
				<input type="date" class="form-control" id="fecha_publicacion" name="fecha_publicacion"
				value="XXXX-MM-DD">
			</div>

			<div class="form-group">
				<label for="imagen">link de la imagen</label>
				<input type="text" class="form-control" id="imagen" name="imagen">
			</div>
			
			<div class="form-group">
				<label for="num_likes">Num_likes</label>
				<input type="text" class="form-control" id="num_likes" name="num_likes">
			</div>
			
			<div class="form-group">
                    <label>Select Generos:</label>
                    <select id="genero_id">
                        <!-- insert JSON here -->                           
                    </select>
                </div>
			
			<button  id="push" class="btn btn-primary">Submit</button>
						
		</form>
	

	</div>



	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
		integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
		crossorigin="anonymous"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
		integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
		crossorigin="anonymous"></script>
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
		integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
		crossorigin="anonymous"></script>
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		
	<script src="jsFunctions.js"></script>
		
  </body>
</html>
















