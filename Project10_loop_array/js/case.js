function colorfunction() {        
    var coloroutput;
    var colors = document.getElementById("colorinput").value;
    var colorstring = " is a great color!";

    switch(colors){

        case "red":
            coloroutput = "red" + colorstring;
        break;
        case "yellow":
            coloroutput = "yellow" + colorstring;
        break;
        case "green":
            coloroutput = "green" + colorstring;
        break;
        case "blue":
            coloroutput = "blue" + colorstring;
        break;
        case "pink":
            coloroutput = "pink" + colorstring;
        break;
        case "purple":
            coloroutput = "purple" + colorstring;
        break;

        default:
            colorouput = "Please enter a color exactly as written on the above list.";
    }

    document.getElementById("output").innerHTML = coloroutput;
        

    }
    

