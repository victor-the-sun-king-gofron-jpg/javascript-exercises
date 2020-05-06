const fibonacci = function(n) {
    //Return the nth value in the fibonnaci sequence
    var fibonacciSeq = [1, 1];
  //Need to add the previous values to get new result
    var n = Number(n);
    console.log(n);
    if (n <= 0){
      return 'OOPS';
    } else if(n === 1 || n === 2){
      return fibonacciSeq[n - 1];
    }

    for(var i = 1; i < n; i++){
      fibonacciSeq.push(fibonacciSeq[i] + fibonacciSeq[i - 1]);
    }
    return fibonacciSeq[n - 1];
}


module.exports = fibonacci
