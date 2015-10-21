function omdb(url){
 $(document).ready(function() {
       $.getJSON(url, function(jd) {
          $('#r').append(+ jd.imdbRating );
       });
 });
}

