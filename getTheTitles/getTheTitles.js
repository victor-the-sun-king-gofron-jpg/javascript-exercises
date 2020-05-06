const getTheTitles = function(array) {
    let bookTitles = [];

    for(var i = 0; i < array.length; i++){
        for(var titles in array[i]){
            if(titles === 'title'){
                bookTitles.push(array[i][titles]);
            }
        }
    }
    return bookTitles;
}
module.exports = getTheTitles;
