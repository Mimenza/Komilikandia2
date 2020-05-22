document.addEventListener("DOMContentLoaded", function(event) {
	fillSelect();
	
	var myArr = new Array();
		
	createHTML();	

	document.getElementById("idmainContainer").addEventListener("click",showInfo);
	
	document.getElementById("push").addEventListener("click", () => pushData(myArr));
	
})
// --------------------------------------------------------------------------------------
function createHTML() {
	$
			.ajax({
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
        				<img src="'
								+ myJsonObject[i].imagen
								+ '" class="card-img-top" alt="..." height="439">\
        				<div class="card-body text-center">\
        				<h5 class="card-title">'
								+ myJsonObject[i].nombre
								+ '</h5>\
        				<p class="card-text">'
								+ myJsonObject[i].titulo
								+ '</p>\
        				<button type="button" class="btn text-white" style="background-color:#444444" data-toggle="modal" data-id='
								+ myJsonObject[i].id
								+ ' data-target="#myModal" >Más info</button></div>\
        				<button type="button" onclick="addLike('
								+ myJsonObject[i].id
								+ ')" style="background-color: #F0F6F7FF">   <img src="imagenes/up.png" class=" " width="20%" > : '
								+ myJsonObject[i].num_likes
								+ '</button>\
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
			+ ")'> <div style='text-align:center;'><i class='fa fa-trash'></i></div>Del</button>"
			+ "<a class='btn btn-success btn-lg text-white  text-center' href='UpdateComic'>Update</a>"
			+ "<button type='button' class='btn btn-primary btn-lg' data-dismiss='modal'>Close</button>";

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

function fillSelect() {		
	console.log("generos");
	  $.ajax({
	    url:'./ApiGeneros',
	    dataType: 'json',	    
	    success: function (myJsonObject) {
	      var myHtml = "";
	      for (let i = 0; i < myJsonObject.length; i++) {
	        myHtml = "<option value='" + myJsonObject[i].id + "'>" + myJsonObject[i].nombre +" "+ myJsonObject[i].id + "</option>"
	        
	        document.getElementById("genero_id").innerHTML += myHtml;       
	      }
	    },
	    error: function (xhr) {
	      alert("An AJAX error occured: " + xhr.status + " " + xhr.statusText);
	    }
	  });
	}

function pushData(myArr)
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

  

  myArr.push(comic);
  
   
  console.log(JSON.stringify(myArr));
  
}
