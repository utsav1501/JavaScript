
/********************This is not constructor ********************/
function movie(title,year){//everytime the function is called a new object should be created
    const movieObj={
        title:title,
        year:year,
        getDetails(){
            console.log(`
                        Title:${this.title}
                        Year:${this.year}
                    `);
        },
    };
    return movieObj;
}

const movie1=movie("The Avengers",2012)//movie1 consist an object
console.log(movie1);
movie1.getDetails();


const movie2=movie("Titanic",1997)
console.log(movie2)
movie2.getDetails();

//here we creating multiple objects with same properties 
//and this is the normal function which is equivalent to construtor

/*************constructor  function*****************/

function Movie(title,year){//constructor should always start from capital letter
    this.title=title;
    this.year=year;

    this.getDetails=function() {//assigning fxn to variable
        console.log(`
                    Title:${this.title}
                    Year:${this.year}
                    `);
    }
}

//new keyword->is used to call the fxn so that it work as constructor

const movie3=new Movie("Pirates of carabean",2000);
console.log(movie3)//movie 3 is returning an object
movie3.getDetails();//and object properties is calling by dot as we know