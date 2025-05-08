//1. Declare a variable called numberOfStudents and give it the value zero
var numberofstudents =0;
//2. Write a function called addStudent that takes no parameters and increases the numberOfStudents variable by one every time it is invoked.
function addStudent(){
    numberofstudents=numberofstudents+1;
    console.log("Number of students" +numberofstudents);
}
//3. Write a function named getNumberOfStudents that takes no parameters and returns the variable numberOfStudents.
function getNumberOfStudents() {
    return numberofstudents
}
//4. Declare an empty array called students.
var students=[]
//5. Modify the function addStudent so that it takes a string (name) as a parameter and adds that string to the array students
function addStudent(name){
    numberofstudents=numberofstudents+1
    students.push(name);
    console.log("Number of students" +numberofstudents);
}
//6. Invoke the function addStudent 5 times with the names of 5 of your colleagues.
addStudent("hazem")
addStudent("aziz")
addStudent("mouhamed")
addStudent("amine")
addStudent("jesser")
//7. Write a function called clearStudents that takes no parameters and removes all the elements of the array and resets numberOfStudents to zero
function clearStudents(){
     students=[]
     numberofstudents=0
    console.log("Number of students" +numberofstudents)
    console.log("students" +students)
}
//8. Modify the function addStudent so it assigns the length of the students array to the variable numberOfStudents.
function addStudent(name){
    students.push(name)
    numberofstudents=students.length
    console.log("Number of students" +numberofstudents)
    console.log("students" +students)
}
//9. Write a function called createFullName that takes two parameters (firstName, lastName) and concatenates the firstName and lastName with an empty space in between and then returns the full name.
function createFullName(firstName, lastName) {
    return firstName+" " +lastName
}
//10. Invoke the addStudent 5 times using the function fullName as a parameter.
addStudent(createFullName("aziz","machraoui"))
addStudent(createFullName("aziz","aydi"))
addStudent(createFullName("amine","haffar"))
addStudent(createFullName("sanad","chbark"))
addStudent(createFullName("douod","jdidi"))
//11. Write a function called getStudentByInitials that takes a string (name) and a character as a parameter and returns true if the string (studentName) starts with the character and false otherwise.Make sure your function works for upper case and lower case letters
function getStudentByInitials(name, initial){
    if (name.charAt(0).tolowerCase()===initial.tolowerCase()){
        return true 
    }
    else{
        return false
    }
}
//12. Write a function called isFullName that takes a string (name) and returns true if the parameter consists of both a firstName and LastName.
//HINT: Use .split()
function isFullName(name) {
    var nameArray=name.split(" ")
    if (nameArray.length===2){
        return true
    }
    else{
        return false
    }
}
//14. Comment the function getStudentByInitials.
//15. Write a function called getStudentsByInitials (notice the S in studentS) that takes a character as a parameter and loops through the array students and then returns an array of all the students whose firstName starts with that character.
function getStudentsByInitials(initial) { 
    var getStudentsByInitials=[]
    var i=0
    while (i<students.length){
        if (students[i].firstName && students[i].firstName.charAt(0).toLowerCase() === initial.toLowerCase()){
            getStudentsByInitials.push(students[i])}
            i=i+1
        }
        return getStudentsByInitials 
    }
    