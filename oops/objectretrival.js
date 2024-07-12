
    const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: { //object inside object
      city: "New York",
      street: "123 Main St",
      zipCode: "10001"
    }
  };
  const userProfile2 = {
    name: "Marry Jane",
    email: "marry.jane@example.com",
    address: {
      city: "L.A",
      street: "154, washington road",
      block: '0101',
      zipCode: "10011"
    }
  };
  
  function getUserDetail(profile, keys) {
    let currentValue = userProfile;
    // console.log(currentValue)
    for (const key of keys) {
        if (currentValue.hasOwnProperty(key)) {
            currentValue = currentValue[key];
            // console.log(currentValue)
        } else {
            return "Not available";
        }
    }
    return currentValue;
  }
  
  
  console.log(getUserDetail(userProfile, ["address", "city"]));
  // Usage: should return "New York"
  //do not modify the return statement
