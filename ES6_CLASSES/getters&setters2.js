class MyClass {
    constructor() {
      // Private property
      let _privateProperty = 'I am private';
  
      // Getter method to access the private property
      this.getPrivateProperty = function() {
        return _privateProperty;
      };
  
      // Setter method to modify the private property
      this.setPrivateProperty = function(newValue) {
        _privateProperty = newValue;
      };
    }
  }
  
  const instance = new MyClass();
  
  // Accessing private property using getter
  console.log(instance.getPrivateProperty()); // Output: I am private
  
  // Modifying private property using setter
  instance.setPrivateProperty('New value');//here setPrivateProperty is a method
  
  // Accessing modified private property
  console.log(instance.getPrivateProperty()); // Output: New value
  