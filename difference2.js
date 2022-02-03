//Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

function difference2(num){
    if(num > 19){
        return (num-19)*3;
    }
    else{
        return 19-num;
    }
}

console.log(difference2(19));//0

console.log(difference2(20));//3

