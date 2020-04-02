const leapYears = function(curYear) {
    if(curYear % 4 === 0 && curYear % 100 !== 0){
        return true;
    } else if(curYear % 400 === 0){
        return true;
    } else {
        return false;
    }
}

module.exports = leapYears
