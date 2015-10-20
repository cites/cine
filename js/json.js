function omdb(url){
 $(document).ready(function() {
       $.getJSON(url, function(jd) {
          $('#r').append(+ jd.imdbRating );
       });
 });
}

function cambiacolor_over(celda){ 
	celda.style.backgroundColor="#00006B"
	 }

function cambiacolor_out(celda){
 celda.style.backgroundColor="#ffffff"
  } 