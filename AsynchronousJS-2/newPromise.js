function trackFitness(exercise, duration) {
    //Implement your promise here
    const request=new Promise((resolve,reject)=>{
        if(duration>0){
            console.log(`${exercise},${duration}`);
            setTimeout(()=>{
                resolve(duration);
            },5000)
        }
        else{
            reject("Invalid duration. Please provide a positive number.")
        }
    })
  }
  trackFitness("Running", 30)
    .then((duration) => {
      console.log(`Total duration: ${duration} minutes.`);
    })
    .catch((error) => {
      console.log(`Failed to track fitness: ${error}`);
    });
