function Vehicle(Make, Model, Year, Color){

    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2023, "Red");
var Emily = new Vehicle("Ford", "Durango", 2023, "Yello");
var Eric = new Vehicle("Sarao", "Passenger", 2023, "Blue");
var Jake = new Vehicle("Honda", "Pilot", 2023, "Black");

function funcCar(){

    document.getElementById("kotse").innerHTML= "Eric drives a " + Eric.Vehicle_Make;
}