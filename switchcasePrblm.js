
    coffeeType=prompt("Enter the coffee type");
    let answer;
    //Write your code here
    //  coffeeType = coffeeType.toLowerCase();
    switch(coffeeType){
        case "regular":
            console.log("2.50");
            break;
        case"expresso":
            console.log("2.50");
            break;
        case "latte":
            console.log(3.50);
            break;
        case "cappuccino":
            console.log(4.00);
            break;
        default:
            answer="Invalid choice"
    }


