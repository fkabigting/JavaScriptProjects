//function mydic(){
    //const car = {type:"Fiat", model:"500", color:"white"};
    //document.getElementById("dic").innerHTML = "The car type is " + car.type;



      //  }
//coercion - where 10 is treated as text concat with 5, and not ADDED
//document.write("10"+ 1 +" Dalmatians");


//nan Not a Number, isNaN
//function mydic(){
    //document.getElementById("dic").innerHTML = 0/0;
    //document.write(100>1);
//}

//Using console to display true or false or to display output
//console.log(100000+10000);
//console.log(100000<10000);
//console.log(100==100); console.log(1==9);
//console.log(1+100);

//using === 
//x=11;
//y="11";
//a="OneTwo";
//b="OneTwo";
//document.writeln(y===x);
//document.writeln(a===b);

//Logical Ops AND OR NOT
//document.writeln(100>1 && 1<100);
//document.writeln(100>1 || 1<100);
//document.write(100 !1);</p>

//Not operator using function
//function mydic(){
   // document.getElementById("dic").innerHTML = "100 > 1 is " + !(100>1);
    

//}

function funcRide(){

    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = Can_Ride + " to ride.";

}







