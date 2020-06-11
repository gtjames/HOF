let declaration = "We hold these truths to be self-evident, " +
"that all men are created equal, that they are endowed by their Creator " +
"with certain unalienable Rights, that among these are Life, Liberty and the " +
"pursuit of Happiness. That to secure these rights, Governments are instituted " +
"among Men, deriving their just powers from the consent of the governed.";

let words = declaration.split(' ');
console.log(words.length);

//Using a for loop, loop through each word and add words 7 
//characters or less to a new array.
let sevenLetterWords = [];
for (let i=0;i<words.length;i++) {
    if (words[i].length <= 7) {
        sevenLetterWords.push(words[i]);
    }
}
console.log(sevenLetterWords);
// Using a for loop, loop through the new list of short words. 
// If the word starts with (startsWith) the letter 't' uppercase that word. 
// Replace the element in the array with the upper cased word. So when your 
// code finds 'these' or 'that' or 'the', it will change them to 'THESE' or 
// 'THAT'' or 'THE'.
for (let i=0;i<sevenLetterWords.length;i++) {
    if (sevenLetterWords[i].startsWith('t')) {
        sevenLetterWords[i] = sevenLetterWords[i].toUpperCase();
    }
}
console.log(sevenLetterWords);