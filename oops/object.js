const movie={//empty curly braces{} means it is an object or empty object
    title:"The Avengers",
    year:2012,
    genre:"Action,Sci-fi,Thriller",
    cast:["Robert Downey Jr. , Chris Hemsworth"],

    //all these(title,year,genre,cast) are properties of object movie

    getDetails:function(){ //this is the method of object
        console.log(`Title:${movie.title}\nYear:${movie.year}\nGenre:${movie.genre}\ncast:${movie.cast}`);
    },

    getMovieDetails:function(detail){
        console.log(movie[detail]);//we use bracket notation bcz if we use dot then
        // it return undefined bcz it dont considere detail as a parameter it directly 
        //see detail inside object property
    }
}
//this form of object creation is called object literal

console.log(movie.title);
movie.getDetails();//calling object method ie getDetails

const detail="year";
movie.getMovieDetails(detail);//movie. isliye use kiye h kyu ki getMovieDetails movie object ka method hai 


//obect inside another object

const movie1={
    title:"The Avengers",
    year:2012,
    genre:"Action,Sci-fi,Thriller",
    cast:{
        main_lead:"Tony Stark.", 
        others:'Chris Hemsworth',
    }
}

console.log(movie1.cast.others);