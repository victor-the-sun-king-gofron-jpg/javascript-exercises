const caesar = function(str, amount) {
    //Take a string and edit its characters +/- chracters in Alphabet
      //var splitStr = string.split('');
      var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
      var secretAlphabet = [];
      //How to solve the wrap problem; Can we use uppercase/lowercase to 
      //simplify alphabet?
      for(var i = 0; i < string.length; i++){
          //if statement for spaces and punctuation
          if(string[i] === ',' || string[i] === ' ' || string[i] === '!' || string[i] === '?'){
              secretAlphabet.push(string[i]);
          } else{
              var oriChar = str[i];
  
              for(var j = 0; j < alphabet.length; j++){
                  if(string[i] === alphabet[j]){
                      //if(string[i] === alphabet[j]){
                      //Create a method to loop the letters 
                      //Problem is both forwards and backwords
                      if(j + n )
  
                      secretAlphabet.push(alphabet[j + n]);
                      //if(j + n > (alphabet.length - 1)){
                      //    var endDiff = (alphabet.length - 1)
                      //}
                  } 
              }
          }  
      }
  
      var newCodeWord = secretAlphabet.join('');
      return newCodeWord;
  }//.match() to find a match(/[A-Z]/g);
  
  function isUpperCase(string){
      return string = string.toUpperCase();
  }

module.exports = caesar
