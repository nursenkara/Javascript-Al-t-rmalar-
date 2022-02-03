function SumOrTriple(first,second){
    if(first == second){
        return 3*(first+second);
    }
    else{
        return first+second;
    }

}
console.log(SumOrTriple(10,20));//30
console.log(SumOrTriple(10,10));//60