// Assignment 3
// https://github.com/Zawad-Zahed/Starting-JS



// 1 killometer = 1000 meter
// kilometer = 1*1000 = meter 


function KilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;

}
var jeteHobe = KilometerToMeter(55);
console.log(jeteHobe);




// 2nd problem Solve = "budgetCalculator" 
/**function budgetCalculator( 
    countWatch = 0 ,
    countMobile = 0 , 
    countLeptop =0
    )
    {
        var costPerWatch = 50;
        var costPerMobile = 100;
        var costPerLeptop = 500;
        var totaleCost = 0;
        if (
            typeof countWatch = 0;
            typeof countMobile = 0; 
            typeof countLeptop =0;
        ){
            else if (
                countWatch < 0; countMobile < 0; countLeptop < 0;
            ){
                else 
                return ( totaleCost = "countWatch" , "countMobile" , "countLeptop" )
            }
        }
      
}
var totaleCost = "return";
console.log(totaleCost); */

var costPerWatch = 50;
var costPerMobile = 100;
var costPerLeptop = 500;
function budgetCalculator(countWatch = 0 ,
    countMobile = 0 , 
    countLeptop =0){
        var totalWatch = costPerWatch * 50;
        var totalMobile = costPerMobile * 100;
        var totalLeptop = costPerLeptop * 500;
        return totalWatch + totalMobile + totalLeptop;
    }
var result = budgetCalculator(2,1,1);
console.log(result);




// 3rd problem Solve = "hotelCost" 
function hotelCost(roomCost){
    var rCost = 0;
    if (roomCost <= 10){
        roomCost = rCost * 100;
    }
    else if( roomCost <= 20){
        var firstSchedule = 10 * 100;
        var inSchedule = roomCost -10;
        var sceondSchedule = inSchedule * 80;
        roomCost = firstSchedule + sceondSchedule;
    }
    else{
        var firstSchedule = 10 * 100;
        var sceondSchedule = 10 * 100;
        var inSchedule = rCost - 20;
        var thirdSchedule = inSchedule * 50;
        roomCost = firstSchedule + sceondSchedule + thirdSchedule;
    }
    return roomCost;
}
var totalDayCount = hotelCost(17);
console.log(totalDayCount);

// 4th problem Solve = "megaFriend" 
var nameOfFriends = ["Sakauwa","Hashu","Mashu","Suki"];
var maxWord = nameOfFriends [0];

function megaFriend (){
    for ( var i = 0; i < nameOfFriends.length; i++){
        var element = nameOfFriends [i];
        if ( element > maxWord.length){
            maxWord = element;
        }
        // else {
        //     return ("small name")
        // }
    }
    return maxWord;
}
var bigName = megaFriend(nameOfFriends);
console.log(bigName);