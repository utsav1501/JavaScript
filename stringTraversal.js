/**Traversing in string */
function countChars(str,ch){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)===ch){
            count++;
        }
    }
    console.log(`Frequency of character ${ch} is: ${count}`);
}

let str="javaScript is an amazing language.."
let charToFind='i';
countChars(str,charToFind);


