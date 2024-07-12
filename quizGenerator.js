
    function shuffle(arr) {
      return function () {
        const result = arr.slice(); // Make a copy of the original array
        
            for (let i = result.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [result[i], result[j]] = [result[j], result[i]]; // Swap elements to shuffle
            }
        return result;
      };
    
    return shuffle;
    }
const questions = ['Question1', 'Question2', 'Question3', 'Question4', 'Question5']; 
const func = shuffle(questions);

const shuffledArray1 = func();
const shuffledArray2 = func();

console.log("shuffleArray1:", shuffledArray1);
console.log("shuffleArray2:", shuffledArray2);