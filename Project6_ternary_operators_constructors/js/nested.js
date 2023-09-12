
//Ternary is like an IF statement
function funcCount(){

    document.getElementById("counting").innerHTML=Count();

    function Count() {
        var Starting_Point = 9;
        function Plus_One(){
            Starting_Point +=1;
        }
        Plus_One();
        return Starting_Point;
    }

    

}