let month=prompt("Enter the month number.");

if(month>=1 && month<=3){
    console.log("First Quarter");
}
else if(month>=4 && month<=6){
    console.log("Second Quarter");
}
else if(month>=7 && month<=9){
    console.log("Third Quarter");
}
else if(month>=10 && month<=12){
    console.log("Fourth Quarter");
}
else{
    console.log("Invalid month.")
}
