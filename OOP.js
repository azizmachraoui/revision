//1. The old bank account example from the lecture looked as follows:
 function makeAccount(initial) {
     var balance = initial;
     return {
          withdraw: function(amount) {
               if (balance - amount >= 0) {
                    balance = balance - amount;
                    return 'Here is your money: $' + amount;
               }
          return 'Insufficient funds.';
          },
          deposit: function(amount) {
               balance = balance + amount;
               return 'Your balance is: $' + balance;
          }
     };
}


function MakeAccount(initial){
     var instance={}
     instance.balance=initial 
     instance.withdraw=withdraw
     instance.deposit=deposit
     return instance
}
var withdraw=function(amount){
           if (this.balance - amount >= 0) {
                    this.balance = this.balance - amount;
                    return 'Here is your money: $' + amount;
               }
          return 'Insufficient funds.';
}
var deposit=function(amount){
      this.balance = this.balance + amount;
               return 'Your balance is: $' +this. balance;
          }
//2. Our stopwatch exercise looked like this when complete:
function makeStopwatch() {
     var stop;
     var time = 0;
     return {
          start: function() {
               stop = setInterval(function() {
               time = time + 1;
               console.log('Elapsed time: ' + time + 's.');
          }, 1000);
     },
          stop: function() {
               clearInterval(stop);
          },
          reset: function() {
               clearInterval(stop);
               time = 0;
          }
     }
}
//As before, refactor the makeStopwatch into a Stopwatch class with shared methods.
function MakeStopwatch() {
     var instance={}
     instance.interval=null
     instance.time=0
     instance.start=start
     instance.stop=stop
     instance.reset=reset
     return instance
}
var start = function() {
                this.interval = setInterval(function() {
               this.time = this.time + 1;
               console.log('Elapsed time: ' + this.time + 's.');
          }, 1000);
     }
var stop=function() {
               clearInterval(this.interval)
               this.interval=null

          }
var reset=function() {
               clearInterval(this.stop)
                this.interval=null
               this.time = 0
          }

//More practice
///0. In this exercise we are going to make a Toaster class, and our Toaster is going to toast bread (because that's what toasters do). Here's a template for getting started on the Toaster class:
function makeToaster(){
     var isToasting = false
     var timer = null
     var newToast = null

     return {
           addToast: function(toast) {
               newToast = toast;
          }
          toast: function() {
               if (!isToasting) {
                    isToasting = true
                    console.log("toasting started!")
                    timer = setTimeout(function() {
                         isToasting = false
                         console.log("your toast is ready!")
                    }, 2000);
               } else {
                    console.log("Already toasting!")
               }
          },
          stop: function() {
               if (isToasting) {
                    clearTimeout(timer)
                    isToasting = false
                    console.log("toasting stopped.")
               } else {
                    console.log("toaster is not running.")
               }
          }
           eject: function() {
               if (newToast) {
                    var ejected = newToast;
                    newToast = null;
                    return "ejected: " + ejected;
               } else {
                    return "no toast to eject.";
               }
          }
     }
}

function MakeToaster() {
     var instance = {}
     instance.isToasting = false
     instance.toast = toast
     instance.stop = stopToasting
     return instance
}

var toast = function() {
     if (!this.isToasting) {
          this.isToasting = true;
          console.log("Toasting started!")
          this._timer = setTimeout(() => {
               this.isToasting = false
               console.log("Your toast is ready!")
          }, 2000);
     } else {
          console.log("Already toasting!")
     }
}

var stopToasting = function() {
     if (this.isToasting) {
          clearTimeout(this._timer)
          this.isToasting = false
          console.log("Toasting stopped.")
     } else {
          console.log("Toaster is not running.")
     }
}
//1. addToast: This method should accept a string representing 'toast' as a parameter, e.g. 'white bread', and set the toast property of the Toaster instance to that piece of toast.
function MakeToaster() {
     var instance = {}
     instance.isToasting = false
     instance.toast = toast
     instance.addToast=addToast
     instance.stop = stopToasting
     return instance
}

var toast = function() {
     if (!this.isToasting) {
          this.isToasting = true;
          console.log("Toasting started!")
          this._timer = setTimeout(() => {
               this.isToasting = false
               console.log("Your toast is ready!")
          }, 2000);
     } else {
          console.log("Already toasting!")
     }
}
var addToast = function(toast) {
     this.toast = toast;
}

var stopToasting = function() {
     if (this.isToasting) {
          clearTimeout(this._timer)
          this.isToasting = false
          console.log("Toasting stopped.")
     } else {
          console.log("Toaster is not running.")
     }
}
//2. eject: This method should accept no parameters, and return one of two things:
function MakeToaster() {
     var instance = {}
     instance.isToasting = false
     instance.toast = toast
     instance.addToast=addToast
     instance.stop = stopToasting
     instance.eject=eject
     return instance
}

var toast = function() {
     if (!this.isToasting) {
          this.isToasting = true;
          console.log("toasting started!")
          this._timer = setTimeout(() => {
               this.isToasting = false
               console.log("your toast is ready!")
          }, 2000);
     } else {
          console.log("Already toasting!")
     }
}
var addToast = function(toast) {
     this.toast = toast;
}

var stopToasting = function() {
     if (this.isToasting) {
          clearTimeout(this._timer)
          this.isToasting = false
          console.log("toasting stopped.")
     } else {
          console.log("toaster is not running.")
     }
}
var eject = function() {
     if (this.toast) {
          var ejectedToast = this.toast;
          this.toast = undefined;
          return "ejected: " + ejectedToast;
     } else {
          return "no toast to eject.";
     }
}





     
