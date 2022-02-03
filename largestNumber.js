//Write a JavaScript program to find the largest of three given integers.
//4,80,62
function largestNumber(number1,number2,number3){
    var largestNumber= number1;
    if(number1 <= number2){
        largestNumber = number2;
    }
    if(largestNumber>number3){
        return largestNumber;
    }
    else{
        largestNumber = number3;
        return largestNumber;
    }
    

}
