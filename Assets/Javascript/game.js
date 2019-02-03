var lettersGuessed = []; //creating array to store the letters already input 

var wins = 0; //number of times user guessed word correctly

var guessesRemaining = 12; //number of guesses - reduced inside game function

//establishing global variable that can be used throughout the objects and the onkey event

var gameObjectArray = ["secure", "access", "engage", "bypass", "finish"];
//var lettersInWord = [];

var pickedWord = gameObjectArray[Math.floor(Math.random() * gameObjectArray.length)];

//var newGame;

var gameStarted = false;

var wordArray;
var solved = [];
//var letter;

var selectedWord;



//var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




var playButton = document.getElementById("play");




playButton.onclick = function () {
    gameStarted = true;
    var newGame = new Game(pickedWord);
    console.log("Game object created");
    console.log(newGame);
    wordArray = pickedWord.split("");
    for (var i = 0; i < wordArray.length; i++) {
        solved[i] = "_";

    }





    document.onkeyup = function (event) //event to register keystrokes
    {

        letter = event.key.toLowerCase();
        lettersGuessed.push(letter);
        guessesRemaining--


        document.getElementById("guessed").innerHTML = " " + lettersGuessed;
        newGame.compareKeys(pickedWord, letter);


        selectedWord = solved.join(" ");
        document.getElementById("solvedWord").innerHTML = solved.join(" ");

        console.log("onkey event");
    }
};


function Game(currentWord) {
    this.word = currentWord;
    console.log("game");



    this.compareKeys = function (currentWord, currentLetter) {
        this.word = currentWord;
        var newLetter = currentLetter;
        console.log("comparekeys");


        for (var i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === newLetter) {
                solved[i] = newLetter;
            }
        }

document.getElementById("attempts").innerHTML = "Attempts remaining until shutdown: " + guessesRemaining;
};

}









/*
    for (i = 0; i < alphabet.length; i++) {
        var btn = document.createElement("BUTTON");
        btn.innerHTML = " " + alphabet[i];
        console.log(btn);
        var keyboard = document.getElementById("keyboard");
        keyboard.appendChild(btn);


    }
    */











//need button function "Play" to start game & choose a word.













