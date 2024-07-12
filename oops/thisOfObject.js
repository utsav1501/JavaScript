const movie={//empty curly braces{} means it is an object or empty object
    title:"The Avengers",
    year:2012,
    genre:"Action,Sci-fi,Thriller",
    cast:["Robert Downey Jr. , Chris Hemsworth"],

    

    getDetails(){ //->here we use this keyword inplace of movie
        console.log(` 
        Title:${this.title}
        Year:${this.year}
        Genre:${this.genre}
        cast:${this.cast}
        `);
    },

    //shortcut way to define method inside an object
    getMovieDetails(detail){
        console.log(movie[detail]);
    }
}


const detail="year";
movie.getDetails(detail);//movie. isliye use kiye h kyu ki getMovieDetails movie object ka method hai 

const movie2={//empty curly braces{} means it is an object or empty object
    title:"3 idots",
    year:2009,
    genre:"comedy,Drama",
    cast:{
        main_lead:"Rancho,Raju,Farhan",
        others:"Battery"
    },

    getDetails(){ //->here we use this keyword inplace of movie
        console.log(` 
        Title:${this.title}
        Year:${this.year}
        Genre:${this.genre}
        cast:${this.cast}
        `);
    },
}

movie2.getDetails();