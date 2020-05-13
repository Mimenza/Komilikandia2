document.addEventListener("DOMContentLoaded", function (event) {

  createHTML();

})
//--------------------------------------------------------------------------------------
function createHTML() {
  $.ajax({
    url: 'http://localhost:8080/ProyectoComics/ApiComics',
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
            <a href="#" class="btn btn-info" data-toggle="modal" data-target="#id'+ myJsonObject[i].id + '">Más info</a>\
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
