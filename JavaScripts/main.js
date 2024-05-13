
var loader = document.getElementById('preloder');
     window.addEventListener("load", function(){
        var delay = 3000;
        setTimeout(function() {
            loader.style.display = "none";
          }, delay);
     });
   