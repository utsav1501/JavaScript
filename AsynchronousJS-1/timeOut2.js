// function greet(name) {
//     console.log(`Hello ${name}!`);
//     }
    // Execute greet() with an argument after 2 seconds (2000 milliseconds)
//     const timeoutId = setTimeout(greet, 2000, "John");
    // Cancel timeout before it executes
//     clearTimeout(timeoutId);


function timer() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(
        function () {
            console.log(i);
        },(i+1)*1000);
      console.log("Hello ninjas!");
    }
  }
  timer();
  
  // Do not edit the rest of the code
  