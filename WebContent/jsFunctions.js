document.addEventListener("DOMContentLoaded", function(event) {
	fillSelectGeneroInsert()
			
	createHTML();	

	document.getElementById("idmainContainer").addEventListener("click",showInfo);
	
	
	
})
// --------------------------------------------------------------------------------------
function createHTML() {
	$.ajax({
				url : './ApiComics',
				dataType : 'json', // specifying here the response type,
				// there's no need to parse it.

				success : function(myJsonObject) {

					// when process is successful
//					

					var rowOpenHTML = "<div class='row justify-content-center'>"
					var colOpenHTML = "<div class='col-lg-3 m-1'>"
					var myHTMLcode = "";

					myHTMLcode = rowOpenHTML;
					for (let i = 0; i < myJsonObject.length; i++) {
						myHTMLcode += colOpenHTML; // open col div

						myHTMLcode += '<div class="card" style=" width: 18rem; height:42em;  background-color: #b8e2f2 ">\
        				<img src="'+ myJsonObject[i].imagen	+ '" class="card-img-top" alt="..." height="439">\
        				<div class="card-body text-center">\
        				<h5 class="card-title">'+ myJsonObject[i].nombre+ '</h5>\
        				<p class="card-text">'+ myJsonObject[i].titulo+ '</p>\
        				<button type="button" class="btn text-white" style="background-color:#444444" data-toggle="modal" data-id='+ myJsonObject[i].id+ ' data-target="#myModal" >Más info</button></div>\
        				<button type="button" onclick="addLike('+ myJsonObject[i].id+ ')" style="background-color: #F0F6F7FF">   <img src="imagenes/up.png" class=" " width="20%" > : '
								+ myJsonObject[i].num_likes	+ '</button>\
        				</div></div>';

					}
					myHTMLcode += "</div>";// close row div
					document.getElementById("idmainContainer").innerHTML = myHTMLcode;
				},
				error : function(xhr) {
					alert("An AJAX error occured: " + xhr.status + " "
							+ xhr.statusText);
				}
			});

}

function showInfo() {

	if (event.target.dataset.id != null) {
		$.ajax({
			url : './ApiComic?id=' + event.target.dataset.id,
			dataType : 'json',
			success : function(myJsonObject) {
				showmodal(myJsonObject);
			},
			error : function(xhr) {
				alert("An AJAX error occured: " + xhr.status + " "
						+ xhr.statusText);
			}
		});
	}
}

function showmodal(myJsonObject) {

	var modalHeaderHTML = "<h4 class='modal-title'>" + myJsonObject.nombre
			+ "</h4><br>  <b><p>" + myJsonObject.titulo + " | </b>"
			+ myJsonObject.id + " Zenbakia</p><br><p>Data: "
			+ myJsonObject.fecha_publicacion + "| Generoa: "
			+ myJsonObject.genero.nombre + "</p><br><p><b>Like kopurua: "
			+ myJsonObject.num_likes + "</b></p>";
	var modalBodyHTML = "<img height='100%' width='100%' src='"
			+ myJsonObject.imagen + "'>";
	var modalFooterHTML = "<button class='btn btn-lg btn-danger' onclick='deleteComic("
			+ myJsonObject.id
			+ ")'> <div style='text-align:center;'><i class='fa fa-trash'></i></div></button>"
			
			+ "<button class='btn btn-lg btn-warning' data-target='#myModal2' data-toggle='modal' data-dismiss='modal' onclick='fillModalUpdate(" + myJsonObject.id+ ")'><i class='fa fa-history'></i></button>"
			
			+ "<button type='button' class='btn btn-primary btn-lg' data-dismiss='modal'><i class='fa fa-ban'></i></button>";
 	
	
	document.getElementById("modal-header").innerHTML = modalHeaderHTML;
	document.getElementById("modal-body").innerHTML = modalBodyHTML;
	document.getElementById("modal-footer").innerHTML = modalFooterHTML;
}

function deleteComic(id) {
	var result = confirm("Datuak borratu egingo dira , ziur zaude?");
	if (result == true) {
		$.ajax({
			url : './ApiDelete?id=' + id,
			success : function(data) {
				location.reload();
			},
			error : function() {
				alert("ERR0R");
			}
		});

	} else if (result == false) {
		alert("datuak ez dira borratuko");
	}

};

function addLike(id) {
	$.ajax({
		url : './ApiLike?id=' + id,

		success : function(myJsonObject) {
			console.log("bien")
			createHTML();


		},
		error : function() {
			alert("MAL ERR0R");
		}
	});

}

function fillSelectGeneroUpdate(generoId) {		
	//console.log("generos");
	  $.ajax({
	    url:'./ApiGeneros',
	    dataType: 'json',	    
	    success: function (myJsonObject) {
	    	console.log(myJsonObject);
	      var myHtml = "";
	      for (let i = 0; i < myJsonObject.length; i++) {
	        myHtml = "<option value='" + myJsonObject[i].id + "'>" + myJsonObject[i].nombre +" "+ myJsonObject[i].id + "</option>"
	        
	        document.getElementById("genero_id").innerHTML+= myHtml;       
	      }
	      document.querySelector('option[value="'+generoId+'"]').selected=true;
	    },
	    error: function (xhr) {
	      alert("An AJAX error occured: " + xhr.status + " " + xhr.statusText);
	    }
	  });
	}

function fillSelectGeneroInsert() {		
	//console.log("generos");
	 $.ajax({
         url: './ApiGeneros',
         dataType: 'json',
         success: function (myJsonObject) {
            var myHTML = "";
            for(let i = 0; i < myJsonObject.length; i++){ 
               myHTML += " <option value='" + myJsonObject[i].id + "'>" + myJsonObject[i].nombre + "</option>"; 
            }
            document.getElementById("genero_idInsert").innerHTML = myHTML;
            document.querySelector('option[value="' + idGenero + '"]').selected = true;
            },
         error: function () {
             alert("Error");
           }
   });
	}

function pushDataUpdate()
//datuak irakurri eta  array batean gorde
{
  var fecha_publicacion = document.getElementById("fecha_publicacion").value;
  
  var id = document.getElementById("id").value;
  
  var imagen = document.getElementById("imagen").value;
  
  var nombre = document.getElementById("nombre").value;
  
  var num = document.getElementById("num").value;
  
  var num_likes = document.getElementById("num_likes").value;
  
  var titulo = document.getElementById("titulo").value;
  
  var genero_id = document.getElementById("genero_id").value;  
  
    

  var comic = { "fecha_publicacion": fecha_publicacion, "id": id,"num_likes": num_likes, "num": num,"nombre": nombre, "imagen": imagen,"titulo": titulo, "genero_id": genero_id };

  

  //myArr.push(comic);
  
   
  console.log(JSON.stringify(comic));
  
  $.ajax({
	  
		url : './ApiUpdateComic',
		type: 'POST',
		data: {'comic': JSON.stringify(comic)},
		dataType : 'text',
		success : function(response) {	
			
		},
		error : function(xhr) {
			alert("An AJAX error occured: " + xhr.status + " "
					+ xhr.statusText);
		}
		
  	});
  
}

function pushDataInsert()
//datuak irakurri eta  array batean gorde
{
	
	console.log("se mete");
	
var fecha_publicacion = document.getElementById("fecha_publicacion").value;

var id = document.getElementById("id").value;

var imagen = document.getElementById("imagen").value;

var nombre = document.getElementById("nombre").value;

var num = document.getElementById("num").value;

var num_likes = document.getElementById("num_likes").value;

var titulo = document.getElementById("titulo").value;

var genero_id = document.getElementById("genero_idInsert").value;  

  

var comic = { "fecha_publicacion": fecha_publicacion, "id": id,"num_likes": num_likes, "num": num,"nombre": nombre, "imagen": imagen,"titulo": titulo, "genero_id": genero_id };

 
console.log(JSON.stringify(comic));

$.ajax({
	  
		url : './ApiInsertComic',
		type: 'POST',
		data: {'comic': JSON.stringify(comic)},
		dataType : 'text',
		success : function(response) {	
			
		},
		error : function(xhr) {
			alert("An AJAX error occured: " + xhr.status + " "
					+ xhr.statusText);
		}
		
	});

}

function fillModalUpdate(id){
	console.log("modalUpdate")
	
		$.ajax({
			url : './ApiComic?id=' + id,
			dataType : 'json',
			success : function(myJsonObject) {				
							
				var modalBodyHTML = "<div class='row justify-content-center'>\
					<div class='col-6 mt-3'>\
							<div class='form-group'>\
								<label for='id' class='text-black'>Id Comic</label> <input type='number'\
									class='form-control' id='id' name='id' value="+myJsonObject.id+" readonly>\
							</div>\
							<div class='form-group'>\
								<label for='nombre' class='text-black'>Nombre</label> <input type='text'\
									class='form-control' id='nombre' name='nombre'  value='"+myJsonObject.nombre+"'>\
							</div>\
							<div class='form-group'>\
								<label for='titulo' class='text-black'>Titulo</label> <input type='text'\
									class='form-control' id='titulo' name='titulo' value='"+myJsonObject.titulo+"'>\
							</div>\
							<div class='form-group'>\
								<label for='num' class='text-black'>Num</label> <input type='number'\
									class='form-control' id='num' name='num' value="+myJsonObject.num+">\
							</div>\
							<div class='form-group'>\
								<label for='fecha_publicacion' class='text-black'>Fecha_publicacion</label> <input\
									type='date' class='form-control' id='fecha_publicacion'\
									name='fecha_publicacion'  value='"+myJsonObject.fecha_publicacion+"'>\
							</div>\
							<div class='form-group'>\
								<label for='imagen' class='text-black'>Imagen</label> <input type='text'\
									class='form-control' id='imagen' name='imagen' value='"+myJsonObject.imagen+"'>\
							</div>\
							<div class='form-group'>\
								<label for='num_likes' class='text-black'>Num_likes</label> <input type='number'\
									class='form-control' id='num_likes' name='num_likes' value="+myJsonObject.num_likes+">\
							</div>\
							<div class='form-group'>\
                                <label >Select Generos:</label>\
                                   <select id='genero_id'></select>\
                           </div>\
							<button id='push' class='btn btn-primary'>Submit</button>\
							<br><br><br><br><br><br>\
					</div>\
				</div>";
				//console.log(myJsonObject.titulo);
								
				document.getElementById("modal-body2").innerHTML = modalBodyHTML;
				
				document.getElementById("modal-header2").innerHTML = "<h3>Comic bat aldatzeko formulario</h3>";
				
				fillSelectGeneroUpdate(myJsonObject.genero.id);
				
				
				document.getElementById('push').addEventListener('click',pushDataUpdate);
				
				
			},
			error : function(xhr) {
				alert("An AJAX error occured: " + xhr.status + " "
						+ xhr.statusText);
			}
		});
	
	
}

function fillModalConfirm(myJsonObject){
	console.log("modalConfirm")
									
			var modalBodyHTML = "<div class='row justify-content-center'>\
				<div class='col-6 mt-3'>\
						<div class='form-group'>\
							<label for='id' class='text-black'>Id Comic</label> <input type='number'\
								class='form-control' id='id' name='id' value="+myJsonObject.id+" readonly>\
						</div>\
						<div class='form-group'>\
							<label for='nombre' class='text-black'>Nombre</label> <input type='text'\
								class='form-control' id='nombre' name='nombre'  value='"+myJsonObject.nombre+"'>\
						</div>\
						<div class='form-group'>\
							<label for='titulo' class='text-black'>Titulo</label> <input type='text'\
								class='form-control' id='titulo' name='titulo' value='"+myJsonObject.titulo+"'>\
						</div>\
						<div class='form-group'>\
							<label for='num' class='text-black'>Num</label> <input type='number'\
								class='form-control' id='num' name='num' value="+myJsonObject.num+">\
						</div>\
						<div class='form-group'>\
							<label for='fecha_publicacion' class='text-black'>Fecha_publicacion</label> <input\
								type='date' class='form-control' id='fecha_publicacion'\
								name='fecha_publicacion'  value='"+myJsonObject.fecha_publicacion+"'>\
						</div>\
						<div class='form-group'>\
							<label for='imagen' class='text-black'>Imagen</label> <input type='text'\
								class='form-control' id='imagen' name='imagen' value='"+myJsonObject.imagen+"'>\
						</div>\
						<div class='form-group'>\
							<label for='num_likes' class='text-black'>Num_likes</label> <input type='number'\
								class='form-control' id='num_likes' name='num_likes' value="+myJsonObject.num_likes+">\
						</div>\
						<div class='form-group'>\
                            <label >Select Generos:</label>\
                               <select id='genero_id'></select>\
                       </div>\
						<button id='push' class='btn btn-primary'>Submit</button>\
						<br><br><br><br><br><br>\
				</div>\
			</div>";
			//console.log(myJsonObject.titulo);
							
			document.getElementById("modal-body2").innerHTML = modalBodyHTML;
			
			document.getElementById("modal-header2").innerHTML = "<h3>Comic bat aldatzeko formulario</h3>";
			
			fillSelectGeneroUpdate(myJsonObject.genero.id);
			
			
			document.getElementById('push').addEventListener('click',pushDataUpdate);
					
		
	};

