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
				<input type="text" class="form-control" id="fecha_publicacion" name="fecha_publicacion"
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
			
			<button type="submit" id="push" class="btn btn-primary">Submit</button>
						
		</form>
		

	</div>



	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
		integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
		crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
		integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
		crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
		integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
		crossorigin="anonymous"></script>
		
	<script type="text/javascript" src="jsFunctions.js"></script>	
</body>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>
















