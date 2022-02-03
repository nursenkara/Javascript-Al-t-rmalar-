function leapYear(year){
// 4 e bölünüp 100 e bölünmüyorsa artık yıl
//4 ,100 e, 400 e bölünüyorsa artık yıl
// 4 e bölünmüyorsa artık yıl değil
// 4 e ve 100 e bölünüp 400 e bölünmüyorsa artık yıl değil
if(year  % 4 == 0 & year % 100 != 0){
    return true;
}
if(year % 4 == 0 & year % 100 == 0 & year % 400 == 0){
    return true;
}
if(year % 4 != 0){
    return false;
}
if(year % 4 == 0 & year % 100 == 0 & year % 400 != 0 ){
    return false;
}

}

console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(1700));
console.log(leapYear(1800));
console.log(leapYear(100));iplyand