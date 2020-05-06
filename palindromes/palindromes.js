const palindromes = function(string) {
    //Section to clean original string of Punctuation Issues
    var originalStr = [];
    for(var i = 0; i < string.length; i++){
        originalStr.push(string[i].replace(/[&\/\\#,+()$~%.'":*?<>{}!]/,''));
    }
    var cleanOriginStr = originalStr.join('').split(' ').join('').toLowerCase();

    //Section dedicated to create reverse string
    var reverseStr = [];
    for(var i = cleanOriginStr.length - 1; i >= 0; i--){
            reverseStr.push(cleanOriginStr[i]);
    }
    var finalReverseStr = reverseStr.join('');

    //Section dedicated to check if palindrome
    return finalReverseStr === cleanOriginStr;
}

module.exports = palindromes
