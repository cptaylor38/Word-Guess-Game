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

var word;



//var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




var playButton = document.getElementById("play");




playButton.onclick = function () {
    gameStarted = true;
    var newGame = new Game(pickedWord);
    console.log("Game object created");
    console.log(newGame);

    









    document.onkeyup = function (event) //event to register keystrokes
    {
        console.log(event.key)
        letter = event.key.toLowerCase();
        lettersGuessed.push(letter);
        guessesRemaining--


        document.getElementById("guessed").innerHTML = " " + lettersGuessed;
        newGame.splitWord(pickedWord);
        newGame.compareKeys(pickedWord, event.key);
        newGame.unsolved(wordArray);
        console.log(letter);



    }



};





function Game(currentWord) {
    this.word = currentWord;




    this.splitWord = function (currentWord) {

        this.word = currentWord;
        var wordArray = currentWord.split("");




        console.log(wordArray);
    };

    this.unsolved = function (wordArray) {
        for (var i = 0; i < wordArray.length; i++) {
            solved[i] = "_";
        }

        // putting in a string
        word = solved.join(" ");
        console.log(solved);
        document.getElementById("solvedWord").innerHTML = word;
        console.log(word);
    };

    this.compareKeys = function (currentWord, letter) {
        this.word = currentWord;
        wordArray = currentWord.split("");
        var newLetter = letter;

        for (var i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === newLetter) {
                solved[i] = newLetter;
                document.getElementById("warning").innerHTML = "Gotchya";
            }
            else {
                document.getElementById("warning").innerHTML = "No, this isn't it.";
                
            }
        }
        document.getElementById("attempts").innerHTML = "Attempts remaining until shutdown: " + guessesRemaining;
        document.getElementById("solvedWord").innerHTML = solved.join(" ");
        console.log(solved);



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













