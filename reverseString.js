function reverseString(str){
    // let original="Hello World";
    // let reversed=str.split('').reverse().join('');
    // return reversed;

    let reversed='';
    for(let i=str.length-1;i>=0;i--){
        	reversed+=str[i];
    	}
    return reversed;
    
    }
    console.log(reverseString("Hello"));