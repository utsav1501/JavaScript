function foo(){
    console.log("Hello From Foo!");
}

function bar(){
    foo();
    console.log("Hello from bar!")
}

function baz(){
    bar();
    console.log("Hello from baz!");
}

baz();