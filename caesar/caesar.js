const caesar = function(str, amount) {
    var solved = '';

    for(var i = 0; i < str.length; i++){
        //Likely need charCodeIndex for the alphabet search
        var asciiNum = str[i].charCodeAt();
        //if(asciiNum <= )
        //console.log(asciiNum);
        if(str[i] === ' ' || str[i] === ',' || str[i] === '!'){
          solved += str[i];
        } else if(asciiNum >= 65 && asciiNum <= 90){
          if((asciiNum + (amount % 26)) > 90){
            var largeVal = ((asciiNum + (amount % 26)) - 90 + 64) 
            solved += String.fromCharCode(largeVal);
          } else if ((asciiNum + (amount % 26)) < 65){
            var smallVal = ((asciiNum + (amount % 26)) - 65 + 91)
            solved += String.fromCharCode(smallVal);
          } else {
            solved += String.fromCharCode(asciiNum + (amount % 26));
          }
        } else if(asciiNum >= 97 && asciiNum <= 122){
            if((asciiNum + (amount % 26)) > 122){
              var largeVal = ((asciiNum + (amount % 26)) - 122 + 96) 
              solved += String.fromCharCode(largeVal);
            } else if ((asciiNum + (amount % 26)) < 97){
              var smallVal = ((asciiNum + (amount % 26)) - 97 + 123)
              solved += String.fromCharCode(smallVal);
            } else{
              solved += String.fromCharCode(asciiNum + (amount % 26));
            }
        }
    }

    return solved;
}

module.exports = caesar
