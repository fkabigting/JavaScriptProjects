



function AgeFunction(){    
    age=document.getElementById("age").value;

    if (age >= 18) {
        Vote = "You are old enough to vote.";
    }

    else {
        Vote = "You are too young to vote.";
    }

    document.getElementById("YourAge").innerHTML=Vote;


}

