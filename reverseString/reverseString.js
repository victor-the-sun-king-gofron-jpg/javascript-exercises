const reverseString = function(str) {
    var revStr = '';
    for(var i = str.length; i > 0; i--){
        revStr += str[i - 1];
    }
    return revStr;
}

module.exports = reverseString
