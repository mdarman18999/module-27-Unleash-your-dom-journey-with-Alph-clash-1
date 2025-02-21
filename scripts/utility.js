function hideElementById(elementId){
    const amar = document.getElementById(elementId)
    amar.classList.add('hidden');
}

function showElementById(elementId){
    const your = document.getElementById(elementId);
    your.classList.remove('hidden');
}


// set 
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// remove >
function removeBAckgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}



function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber)

    const alphabet = alphabets[index];
    return alphabet;
}




// function getARandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);


//     // get a random index between 0 -25
//     const RandomNumber = Math.random() * 25;
//     const index = Math.round(RandomNumber);
    

//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;

// }