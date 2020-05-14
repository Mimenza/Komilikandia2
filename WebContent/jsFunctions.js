document.addEventListener("DOMContentLoaded", function (event) {

  createHTML();
 
  document.getElementById("idmainContainer").addEventListener("click", () => showinfo());
})
//--------------------------------------------------------------------------------------
function createHTML() {
  $.ajax({
    url: './ApiComics',
    dataType: 'json', //specifying here the response type, there's no need to parse it.

    success: function (myJsonObject) {


      // when process is successful 
      var rowOpenHTML = "<div class='row justify-content-center'>"
      var colOpenHTML = "<div class='col-lg-3 m-1'>"
      var myHTMLcode = "";

      myHTMLcode = rowOpenHTML;
      for (let i = 0; i < myJsonObject.length; i++) {
        myHTMLcode += colOpenHTML;  // open col div

        myHTMLcode += '<div class="card" style=" width: 18rem; height:42em;  background-color: #a6a2a2 ">\
        <img src="'+ myJsonObject[i].imagen + '" class="card-img-top" alt="..." height="439">\
        <div class="card-body text-center">\
            <h5 class="card-title">'+ myJsonObject[i].nombre + '</h5>\
            <p class="card-text">'+ myJsonObject[i].titulo + '</p>\
            <button type="button" class="btn btn-info" data-toggle="modal" data-id=' + myJsonObject[i].id + ' data-target="#myModal">Más info</button>\
        </div>\
        <a href="#" class="btn ">   <img src="imagenes/34-512.png" class=" " width="25%"> : '+ myJsonObject[i].num_likes + '</a>\
    </div></div>'; 

      }
      myHTMLcode += "</div>";// close row div
      document.getElementById("idmainContainer").innerHTML += myHTMLcode;
    },
    error: function (xhr) {
      alert("An AJAX error occured: " + xhr.status + " " + xhr.statusText);
    }
  });


}

function showInfo() {
	console.log("showinfo");
	console.log(event.target.dataset.id);
	
    if (event.target.dataset.id != null) {
        $.ajax({
          url: './ApiComic?id=' + event.target.dataset.id,
          dataType: 'json',
          success: function (myJsonObject) {
        	  showmodal(myJsonObject);
          },
          error: function (xhr) {
            alert("An AJAX error occured: " + xhr.status + " " + xhr.statusText);
          }
        });
      }
}

function showmodal(myJsonObject){
	console.log("showmodal");
	  var modalHeaderHTML = "<h4 class='modal-title'>" + myJsonObject.nombre + "</h4><br><b><p>" + myJsonObject.titulo + " | </b>" + myJsonObject.id + " Zenbakia</p><br><p>Data: " + myJsonObject.fechaPublicacion + "| Generoa: " + myJsonObject.genero.nombre + "</p><br><p><b>Like kopurua: " + myJsonObject.numLikes + "</b></p>";
	  var modalBodyHTML = "<img height='100%' width='100%' src='" + myJsonObject.imagen + "'>";
	  var modalFooterHTML = "<button class='btn btn-lg btn-primary' onclick='deleteComic(" + myJsonObject.id+ ")'> <div style='text-align:center;'><i class='fa fa-trash'></i></div></button><button class='btn btn-lg btn-primary' onclick='updateComic(" + myJsonObject.id+ ")'> <div style='text-align:center;'><i class='fa fa-history'></i></div></button><button type='button' class='btn btn-primary btn-lg' data-dismiss='modal'>Close</button>";

	  document.getElementById("modal-header").innerHTML = modalHeaderHTML;
	  document.getElementById("modal-body").innerHTML 	= modalBodyHTML;
	  document.getElementById("modal-footer").innerHTML = modalFooterHTML;	
}

function deleteComic(id){
	$.ajax({
		url: './ApiDelete?id='+ id,
	    dataType: 'json', 
	    success: function (myJsonObject) {
	    	confirm("Datuak borratu egingo dira , ziur zaude?");
	    	location.reload();
	},
	error: function () {
	      alert("Error");
	}
	});
	
};
