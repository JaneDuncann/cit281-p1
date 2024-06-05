/*
    CIT 281 Project 1 Random
    Name: Jane Duncan
*/
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function generateString() {
    let length = getRandomInteger(5, 25)
    let result = ' '
    for (let i = 0; i < length; i ++) {
        let randomLetter = getRandomInteger(0, characters.length-1) //Thsi accounts for the 0-based indexing
        result = result + characters.charAt(randomLetter)
    }
    return result 
}

console.log(generateString())