//Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
function front_back3(text){
if(text.length < 3){
    return false;
}
//python
else{
    var last_three = text.substring(text.length-3);
    return last_three+text+last_three;
}
}
console.log(front_back3("abc"));
console.log(front_back3("ab"));
console.log(front_back3("abcd"));