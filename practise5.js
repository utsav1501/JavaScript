const name="Alice"

const person={
    name:"john",
    greet:function(){
        const innerfunc=()=>{
            console.log(`Hello,${this.name}!`);
        };
        innerfunc();
    }
};

person.greet();