
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };


 console.log(Object.keys(student))



 var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 }

    console.log("rollon", student)
    delete student.rollno 
    console.log("rollon", student)



var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

    console.log(Object.keys(student).length)



var library = [ 
    {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
    },
    {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
    },
    {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
    }];


library.forEachfunction(book) {
    console.log ("author",book.author,"title",book.title,"readingStatus", book.readingStatus)
}

.
function cylinderVolume(radius, height) {
    var volume= Math.PI* Math.pow(radius,2)*height
    return volume.toFixed(4)
}


function circleArea(radius) {
    return Math.PI*Math.pow(radius,2)
}


