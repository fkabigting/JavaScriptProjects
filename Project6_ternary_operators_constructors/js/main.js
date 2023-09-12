
//Ternary is like an IF statement
function funcVote(){

    var age, Can_Vote;
    age = document.getElementById("age").value;
    Can_Vote = (age < 17) ? "Sorry but you are too YOUNG to vote":"Hello voter, please proceed to the registration booth and get a ballot.";
    document.getElementById("vote").innerHTML = Can_Vote;

}