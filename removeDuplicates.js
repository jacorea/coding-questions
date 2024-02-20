var test = 'AbraCadABraAlakAzam';

function removeDuplicates(word) {
  //get different parameters
    // are there any special characters
    // do i need to worry about upper/lower case 
    // how about spaces

    //loop through string
    // add char in object if first time
    // if present already remove from string
    // can either add to an array or remove from string

    const lookup = {};
    
    let final = [];

    for (let i=0; i<word.length;i++) {
      let letter = word[i].toLowerCase();
      // if letter exists then do not add, if does not exist add;
      lookup[letter] ? "" : lookup[letter]=1 && final.push(word[i]);
    }
    return final.join("");
}

console.log(removeDuplicates(test))

