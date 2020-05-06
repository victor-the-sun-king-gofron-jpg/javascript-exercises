let findTheOldest = function(array) {
    //We want to output the name of the oldest person
    var oldestPerson = {};
    var ageOfPerson = 0;
    var thisYear = new Date().getFullYear();
    for(var i = 0; i < array.length; i++){
      for(var names in array[i]){
        var age = 0;
        if(array[i].yearOfDeath){
          var age = array[i].yearOfDeath - array[i] .yearOfBirth;
            if(age > ageOfPerson){
              ageOfPerson = age;
              oldestPerson = array[i];
            }
          } else{
            var age = thisYear - array[i].yearOfBirth;
            if(age > ageOfPerson){
              ageOfPerson = age;
              oldestPerson = array[i];
          }
        }
      }
    }
    return oldestPerson;
}

module.exports = findTheOldest
