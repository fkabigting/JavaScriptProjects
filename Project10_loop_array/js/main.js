function count_to_ten() {        
  var digit="";
  var x = 1;
  while (x<11) {
   digit += "<br>" + x;
 document.write ("Happy Coding");
       x++;
   }
document.getElementById("counting_to_ten").innerHTML = digit;
}        

            var instruments = ["guitar", "drums", "piano", "bass", "violin", "trumpet", "flute"];
            var content = "";
            var y;

            function forloop(){
                for (y=0; y < instruments.length; y++) {
                    content += instruments[y] + "<br>";

                }
                document.getElementById("listofinstruments").innerHTML = content;
        }



