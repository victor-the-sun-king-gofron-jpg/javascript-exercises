const removeFromArray = function(array, value1, value2, value3, value4) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] !== value1){
            if(array[i] !== value2){
                if(array[i] !== value3){
                    if(array[i] !== value4){
                        newArr.push(array[i]);
                    }
                }
            }
        }
    }
    return newArr;
}

module.exports = removeFromArray
