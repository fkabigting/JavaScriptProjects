
  
  function sum(){
    var thesum = 2 + 6;
    document.getElementById('add').innerHTML = thesum;
  }

function diff(){
    var thediff = 10-4;
    document.getElementById('minus').innerHTML = thediff;
}
   function prod(){
    var theprod = 10*10;
    document.getElementById('mult').innerHTML = theprod;

   }
   function quo(){
    var thequo=100/5;
    document.getElementById('divide').innerHTML = thequo;
    
     }

    //multi operation
    function many(){
     var ans=(100/5)*2+5-2;
     document.getElementById('multiple').innerHTML = ans;
     
      }

      //modulus operation
    function mods(){
        var mdls=25 % 6;
        document.getElementById('mdulo').innerHTML = mdls;
        
         }

         
      //Unary Operator
    function negation_ops(){
        var x=10;
        document.getElementById('negnum').innerHTML = -x;
        
         }
     
      //Increment and Decrement
      function inc(){
        var x=100;
        x++;
        document.getElementById('incnum').innerHTML = x;
        
         }

         function dec(){
            var x=100;
            x--;
            document.getElementById('decnum').innerHTML = x;
        }

        function ran(){
            document.getElementById('rannum').innerHTML = math.random();
            
        }
           
        
        
        
            
     

