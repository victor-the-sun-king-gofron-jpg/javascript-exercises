const repeatString = function(str, number) {
    var fullStr = "";
    var repeat = 0;
    
    if(number < 0){
        return "ERROR";
    }
    
    while(repeat != number){
        fullStr += str;
        repeat += 1;
    }
    return fullStr;
}

module.exports = repeatString
