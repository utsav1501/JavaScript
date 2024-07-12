/** All the object in jS has built-in property called prototype and 
 protype in itself is actually property*/

function Movie(title){
    this.title=title;
}

const movie1=new Movie('The Avengers');

movie1.year=2012;
console.log(movie1)
console.log(movie1.__proto__);//the movie constructor fxn is the prototype of movie1

const movie2=new Movie('Avatar')
console.log(movie2)

console.log(movie2.__proto__);//the movie constructor fxn is the prototype of movie2

//all the object inside javascript has built in property called prototype

console.log(movie2.__proto__.__proto__);//prototype of movie2 is movie and prototype of movie is object