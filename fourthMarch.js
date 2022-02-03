console.log('--------------------');
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 2, 4);
    if ( d.getDay() === 0 )
        console.log("4th March is being a Sunday  "+year);
    }
console.log('--------------------');