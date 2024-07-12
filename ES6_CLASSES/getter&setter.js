class Circle{
    constructor(radius){
        this.radius=radius;
    }

    // getDiameter(){
    //     console.log(2*this.radius);
    // }

    get diameter(){
        return this.radius*2;
    }

    set diameter(newDiameter){
        if(newDiameter>=0){
        this.radius=newDiameter/2;
    }
    else{
        console.log('Invalid Input')
    }
}
}

const circle=new Circle(4);
console.log(circle.radius);
// circle.getDiameter()
console.log(circle.diameter);
// circle.diameter=16;
circle.radius=6;
console.log(circle.diameter);

circle.diameter=20;
console.log(circle.radius);
console.log(circle.diameter);