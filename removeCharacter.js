function remove_character(name,char_pos){
    var part1 = name.substring(0,char_pos);
    var part2 = name.substring(char_pos+1,name.length);
    return part1+part2
}
console.log(remove_character("Python",0));

console.log(remove_character("Python",3));

console.log(remove_character("Python",5));