function guessANumber(){
    const num = Math.ceil(Math.random() * 10);
    console.log(num);
    const gnum = prompt("Guess the number between 1 and 10 inclusive");
    if(gnum == num){
        console.log("Matched");
    }
    else{
        console.log("No matched! The number was "+num);
    }

}
console.log(guessANumber());