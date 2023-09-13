



function full_sentence(){    
   var part1 = "I have ";
   var part2 = "made this ";
   var part3 = "into a complete ";
   var part4 = "sentence."
   var whole_sentence = part1.concat (part2, part2, part4);
   document.getElementById("concatenate").innerHTML = whole_sentence;
}

function sliceMethod(){    

var sentence = "All work and no play makes Johnny a dull boy.";
var section = sentence.slice(27, 33); //counting of text start from 0
document.getElementById("slice").innerHTML = section;
}

function uppercase(){    

    var sentence = "All work and no play makes Johnny a dull boy.";
    var upper = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
    }


    function searc(){    

        var sentence = "All work and no play makes Johnny a dull boy.";
        var upper = sentence.search("play");
        document.getElementById("upper").innerHTML = upper;
        }


        function numbertostring(){    

            var sentence = 168;            
            document.getElementById("upper").innerHTML = sentence.toString();
            }