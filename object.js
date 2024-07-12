const student = { //here student is the object
    name:"Alexa",
    age:10,
    hobby:"Dancing",
    100:"hundred",
    show:function(){
        console.log("This is the student details section")
    }
}
student.standard=8;
console.log(student);
console.log(student.name);
console.log(student['name']);
console.log(student[100]);
student.show();

//object is collection of key and value;