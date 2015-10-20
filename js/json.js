function omdb(url){
 $(document).ready(function() {
       $.getJSON(url, function(jd) {
          $('#r').append(+ jd.imdbRating );
       });
 });
}

function cambiacolor_over(celda){ 
	celda.style.backgroundColor="#4DB8B8"
	 }

function cambiacolor_out(celda){
 celda.style.backgroundColor="#293D3D"
  } 