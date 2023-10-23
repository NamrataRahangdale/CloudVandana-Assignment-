//A. Take a sentence as an input and reverse every word in that sentence.
function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
  
    // Create an array to store the reversed words
    const reversedWords = [];
  
    // Iterate through each word and reverse it
    for (const word of words) {
      let reversedWord = '';
      for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
      }
      reversedWords.push(reversedWord);
    }
  
    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Example usage:
  const inputSentence = "This is a test round";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); // Output: "sihT si a tset dnuor"
