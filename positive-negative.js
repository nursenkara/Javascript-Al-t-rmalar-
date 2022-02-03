//Write a JavaScript program to check from two given integers, whether one is positive and another one is negative. 
function PositiveAndNegative(first,second){
    if((first < 0 & second > 0) | (first > 0 & second <0)){
        return true;
    }
    else{
        return false;
    }
}
console.log(PositiveAndNegative(5,9));
console.log(PositiveAndNegative(5,-9));
console.log(PositiveAndNegative(-5,-9));
console.log(PositiveAndNegative(-5,9));
