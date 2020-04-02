const sumAll = function(integer1, integer2) {
    var total = 0;
    
    if(integer1 < 0 || integer2 < 0){
    return "ERROR";
    } else if(typeof integer1 === 'string' || typeof integer2 === 'string'){
        return 'ERROR';
    } else if(typeof integer1 === 'object' || typeof integer2 === 'object'){
        return 'ERROR';
    } else if(integer1 > integer2){
        for(var i = integer2; i <= integer1; i++){
            total += i;
        } console.log(total);
    } else if(integer2 > integer1){
        for(var i = integer1; i <= integer2; i++){
            total += i;
        }
    } 
    return total;
}

module.exports = sumAll
