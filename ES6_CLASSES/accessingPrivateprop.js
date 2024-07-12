class Superclass{
    #privateProperty='I am private';

    getPrivateProperty(){
        return this.#privateProperty;
    }

    publicMethod(){
        // return this.#privateProperty;
        return this.getPrivateProperty();
    }
}

class Subclass extends Superclass{
    SubclassMethod(){
        return this.publicMethod();
    }
}

const instance = new Subclass();
console.log(instance.publicMethod()); // Output: I am private
console.log(instance.SubclassMethod()); // Output: I am private
// console.log(instance.#privateProperty);