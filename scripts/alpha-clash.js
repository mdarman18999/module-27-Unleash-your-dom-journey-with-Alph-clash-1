// function play(){
//     // step-1: hide the home screen to hide the screen add the class hidden to the home section 
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
    
//     // console.log(homeSection.classList)
//     // step-2: show the playground

//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }


// practice <




// function play(){
//     const home = document.getElementById('home-screen');
//     home.classList.add('hidden');

//     const am = document.getElementById('play-ground')
//     am.classList.remove('hidden')
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    // key player is expected to press 
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you got a point !');
        // update score: 
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        console.log(currentScore);
        // 2. increase the score by 1
        const newScore = currentScore + 1;
        // 3. show the update score 
        currentScoreElement.innerText = newScore
        // start a new round
        removeBAckgroundColorById(expectedAlphabet)
        continueGame();
    }
    // 01926217169
    // 01743956422
    else{
        console.log('dhurr miya right jy gay chp den')
        // step-1: get the current life number
        const currentLifeElement = document.getElementById('current-life')
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText)

        // step-2: reduce the life count
        const neWLife = currentLife - 1;
        // step-3: display the updated life count
        currentLifeElement.innerText = neWLife;
        

    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame(){
    // step -1: generate a random alphabet
      const alphabet = getARandomAlphabet();
    //   console.log('your random alphabet', alphabet);

      // set randomly generated alphabet to the screen (show it)
      const currentAlphabetElement = document.getElementById('current-alphabet');
      currentAlphabetElement.innerText = alphabet;

      // set background color
      setBackgroundColorById(alphabet)
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}