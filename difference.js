// Verilen sayı 13 ten küçük eşitse, farklarını yaz, 13ten büyük farklarının 2 katını alan program

function difference(num){
if(num <= 13){
    return 13-num;
}
else{
    return (num-13)*2;
}
}
console.log(difference(5));
console.log(difference(15));