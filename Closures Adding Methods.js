//0. Our closures is :

 //function makeAccount(initial) {
     //var balance = initial;
    // return {
         // withdraw: function(amount) {
         // if (balance - amount >= 0) {
         // balance = balance - amount;
         // return 'Here’s your money: $' + amount;
     //}
    // return 'Insufficient funds.';
//},
     //deposit: function(amount) {
          //balance = balance + amount;
          //return 'Your balance is: $' + balance;
          //}
     //};
//}

//1. Modify the makeAccount function from the lecture so that the returned object contains an additional key called checkBalance, the value of which is a function that takes no arguments and returns a string representing the current balance. You should be able to use it like this
 function makeAccount(initial) {
        var balance = initial;
     return {
          withdraw: function(amount) {
          if (balance - amount >= 0) {
          balance = balance - amount;
          return 'Here’s your money: $' + amount;
     }
     return 'Insufficient funds.';
},
     deposit: function(amount) {
          balance = balance + amount;
          return 'Your balance is: $' + balance;
          }
     }
     chekBalance: function (){
            return 'your balance is: $' +balance
     }
 }

 //2. Let's revisit the counter exercise. Currently, makeCounter only allows us to count up -- what if we want to count down too? Modify makeCounter so that it returns an object that contains two keys: up and down, each of which has functions as values. up should make the count increase, and down should make the count decrease
 function makeCounter(initial) {
        var count = initial
        return {
            up:function(){
                count =count + 1
                return count 
            }
            down: function(){
                count = count - 1
                return count 
            }

        }
 }

 //3. Give your counter a reset capability as well, that resets the count back to its initial value.
 function makeCounter(initial) {
        var count = initial
        return {
            up:function(){
                count =count + 1
                return count 
            }
            down: function(){
                count = count - 1
                return count 
            }
            reset : function(){
                count = initial
                return count 
            }

        }
 }

 //More Practice
//1. Remember the guessing game from the first week? When we wrote the first version of the game, we didn't know about closures and stored all of our state (variables) in the global scope. Rewrite the guessing game to take advantage of closures so that you can create multiple games. Here is some starter code
function randInt(n) {
     return Math.floor(Math.random() * (n + 1));
     }
function guessMyNumber(n) {
    var secretNumber = randInt(n)
    var guess = 0
    return {
        guessMyNumber: function(guess) {
            if (guess ===secretNumber) {
                return 'you guessed it '+ secretNumber
            }
            else if (guess<secretNumber) {
                return 'too low'
            }
            else{
                return 'too high'
            }
            }
        reset: function() {
            secretNumber = randInt(n)
            guess = 0
            return 'game reset'+secretNumber
        }
        }
    }
//2. You will need to define a function makeGame, and at the minimum, you should be able to play the game like this
function randInt(n) {
     return Math.floor(Math.random() * (n + 1));
     }
function makeGame(upperbound) {
    var secretNumber=randInt(upperbound)
    var guess = 0
    var highscore=5
    var chance=0
    return {
        paly: function(guess) {
            if (chance===5) {
                return "you reach the maximum of chances please reset the game"
            }
            else if (guess === secretNumber) {
                return 'you guessed it '+ secretNumber
            }
            else if (guess<secretNumber) {
                chance=chance+1
                return 'too low'
            }
            else{
                chance=chance+
                return 'too high'
            }
        }
        reset: function() {
            secretNumber = randInt(upperbound)
            guess = 0
            chance=0
            return 'game reset'+secretNumber
        }
    }
}
//3.  Write a function someEven that, given an array of numbers as an argument, returns true if at least one of the numbers is even.
function someEven(array){
    for (var i=0;i<array.length;i=i+1){
        if (array[i]%2===0){
            return true
        }
    }
    return false
}
//4. Write the functions someOdd, somePositive, and someNegative that work similarly to someEven.
function someOdd(array){
    for (var i=0;i<array.length;i=i+1){
        if (array[i]%2!==0){
            return true
        }
    }
    return false
} 
function somePositive(array){
    for (var i=0;i<array.length;i=i+1){
        if (array[i]>0){
            return true
        }
    }
    return false
}
function someNegative(array){
    for (var i=0;i<array.length;i=i+1){
        if (array[i]<0){
            return true
        }
    }  
    return false
}
//5. Write a function some that accepts an array as its first parameter, and a predicate (a function that returns true or false) as its second parameter. If the predicate returns true for any of the elements in the array, some should return true
