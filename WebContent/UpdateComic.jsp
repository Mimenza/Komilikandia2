<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
   
 <%@ page import="modelo.bean.Comic"%>
    
 <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

 <%--  <%@ Comic comic =(Comic)request.getAttribute()Comic) %>  --%> 
    
    
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

	<div class="container black mt-3">
		<h1>Formulario para crear un Comic</h1>

<!-- action="ApiInsertComic" -->

		<form method="POST">
			<div class="form-group">
				<label for="id">Id Comic</label>
				<input type="text" class="form-control" id="id" name="id"
				value="${comic.getId}">
			</div>

			<div class="form-group">
				<label for="nombre">Nombre</label>
				<input type="text" class="form-control" id="nombre" name="nombre"
				value="${comic.getNombre}">
			</div>

			<div class="form-group">
				<label for="titulo">Titulo</label>
				<input type="text" class="form-control" id="titulo" name="titulo"
				value="${comic.getTitulo}">
			</div>

			<div class="form-group">
				<label for="num">Num</label>
				<input type="text" class="form-control" id="num" name="num"
				value="${comic.getNum}">
			</div>

			<div class="form-group">
				<label for="fecha_publicacion">Fecha_publicacion</label>
				<input type="text" class="form-control" id="fecha_publicacion" name="fecha_publicacion"
				value="${comic.getFecha_publicacion}">
			</div>

			<div class="form-group">
				<label for="imagen">link de la imagen</label>
				<input type="text" class="form-control" id="imagen" name="imagen"
				value="${comic.getImagen}">
				
			</div>
			
			<div class="form-group">
				<label for="num_likes">Num_likes</label>
				<input type="text" class="form-control" id="num_likes" name="num_likes"
				value="${comic.getNum_likes}">
			</div>
			
			<div class="form-group">
                    <label>Select Generos:</label>
                    <select id="genero_id">
                        <!-- insert JSON here -->
                           
                    </select>
                </div>
			
			<button type="button" class="btn text-white" style="background-color:#444444" data-toggle="modal" data-id='+  myJsonObject[i].id + ' data-target="#myModal">Submit</button></div>
						
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
















