
// Locations A B C Represent => Locations West to East Left To Right

// Storm ---->
// A B C = Prediction - P1 P2 P3 

// Prediction --- 0 based. Increases based on time and lengths.

var location_Z = {
    map: 1,
    isRaining: null,
    stormBy: "",
    didStart: null,
    prediction: 0
    
};

var location_A = {
    map: 2,
    isRaining: null,
    stormBy: "",
    didStart: false,
    prediction: 0,
    isNext: null
};

var location_B = {
    map: 3,
    isRaining: null,
    stormBy: "",
    didStart: false,
    prediction: 0,
    isNext: null
}

var location_C = {
    map: 4,
    isRaining: null,
    stormBy: "",
    didStart: false,
    prediction: 0,
    isNext: null

}

var location_F = {
    map: 5,
    isRaining: null,
    stormBy: "",
    didStart: false,
    prediction: 0,
    isNext: null
}



//Creating a Storm --- Main variables.

var Storm = function(name, location, power, age, direction, speed){
    this.name = name;
    this.location = location;
    this.power = power;
    this.age = age;
    this.direction = direction;
    //Direction
    this.speed = speed
};

var Rage = new Storm('Rage', 1, 10, 10, '4V', 10 ); //4v = west

// Direction will change through the execution time - <1 ^2 v3 4> - pushing the direction and prediction based on prev val -- logging the path

var directionalClock = "";

Storm.prototype.predictRun = function(){
    if(location_Z.map === this.location){
        // Turn on is Rain for that module --- for drag est
        location_Z.isRaining = true;
        // Set Storm to Module 
        location_Z.stormBy = this.name;
        // Execute Start Point Set Directional Map
        location_Z.didStart = true;
        // Set directional Mapper
        directionalClock = this.direction;
        // Set Prediction Values for Full Map = Lets just these are estimated values for testing run
        location_Z.prediction = 100;
        // If location start is west of next location 
        if(location_Z.prediction === 100 && directionalClock === this.direction){
            // If location a is next in directional path - its  prediction will be set
            location_A.prediction = 85;
            // Set next locations logic based on new set logic
            location_A.isNext = true;

            location_A.stormBy = location_Z.stormBy

            //NOW SET ALL PREDICTIONS BASED ON MOVEMENT 

            if (location_A.prediction > 50 && directionalClock === directionalClock){
                location_B.prediction = location_A.prediction - 10;
                location_C.prediction = location_B.prediction - 10;
                location_F.prediction = location_C.prediction - 10;
            }
        }
    }
}

Rage.predictRun();
console.log(location_Z);
console.log(location_A);
console.log(location_B);
console.log(location_C);
console.log(location_F);






