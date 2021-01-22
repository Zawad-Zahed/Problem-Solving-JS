// Assignment 3
// https://github.com/Zawad-Zahed/Starting-JS


// 1st problem Solved = "KilometerToMeter" 
// 1 killometer = 1000 meter
// kilometer = 1*1000 = meter 

var kilometer = 1;
var meter = 1000;
function KilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;

}
var jeteHobe = KilometerToMeter(58);
console.log("total meter:",jeteHobe);  //Ans: 5800 meter.


// 2nd problem Solved = "budgetCalculator" 
var costPerWatch = 50;
var costPerMobile = 100;
var costPerLeptop = 500;
    function budgetCalculator(countWatch,
        countMobile, 
        countLeptop){
            var totalWatch = countWatch * 50;
            var totalMobile = countMobile * 100;
            var totalLeptop = countLeptop * 500;
            return totalWatch + totalMobile + totalLeptop;
        }
    var result = budgetCalculator(5,4,3);
    console.log("total budget:",result); // Ans: budget lagbe 2150taka.
    



// 3rd problem Solve = "hotelCost" 
function hotelCost(roomCost){
    var rCost = 0;
    if (roomCost <= 10){
        roomCost = rCost * 100;
    }
    else if( roomCost <= 20){
        var firstSchedule = 10 * 100;
        var inSchedule = roomCost - 10;
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
console.log("Total money of the hotelCost:",totalDayCount); //Ans: 17 diner jonne 1560Taka.


// 4th problem Solve = "megaFriend" 

var nameOfFriends = ["Sakauwa","Hashu","Shukhaimura","Suki","Mashu"];
var maxWord = nameOfFriends [0];

function megaFriend (nameOfFriends){
    for ( var i = 0; i < nameOfFriends.length; i++){
        var element = nameOfFriends [i];
        if ( element.length > maxWord.length){
            maxWord = element;
        }
    }
    
    return maxWord;
    
}

var bigNameOfFriends = megaFriend(nameOfFriends);
console.log("Big name of the friends zone:", bigNameOfFriends); //Ans: Shukhaimura. 