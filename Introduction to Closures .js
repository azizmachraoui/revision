//0. Closure looks like this:
//function makeAccount(initial) {
    //  var balance = initial;
     //return function(amount) {
         // if (balance - amount >= 0) {
          //balance = balance - amount;
          //return 'Here is your money: $' + amount;
          //}
     //return 'Insufficient funds.';
     //};
//}
//1. 1. Let's make a counter using closures. For our purposes, a counter is simply a function that, when invoked, returns a number that is one higher than it used to be. For example, this is the behavior that we want:
function makeCounter() {
    var count = 0
    return function () {
        count = count +1
        return count 
    }
}
//2. Update makeCounter so that, instead of always starting from zero, you can start from any number, e.g.:
function makeCounter(start) {
    var count = start
    return function () {
        count = count +1
        return count
    }
}
//3. One way we can use closures is as functions that construct other functions. Consider the numerous examples of exponentiation functions that we've created, e.g. square and cube. The following function pow is incomplete:
function pow(exponent) {
    return function (base) {
        var result=1
        for (var i=0; i<exponent; i++){
            result= result*base
        }
        return result 
    }
}
//More Practice
//1. zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.The function value is one new array.If the arrays are of unequal length, the output will only be as long as the shorter one.(Values of the longer array are simply not used.)Inputs should not be modified.
function zipWith(fnc, arr1, arr2) {
    var result =[]
    for (var i=0; i<arr1.length && i<arr2.length; i++){
        result.push(fnc(arr1[i], arr2[i]))
    
    }
    return result
} 

//2. We want to create a function that will add numbers together when called in succession.
function add(num) {
       var sum = num

    function inner(next) {
      if (typeof next === 'undefined') {
        return sum;
      }
      sum = sum+next
      return inner;
    }

    return inner
} 
