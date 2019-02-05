var gameObjectArray = ["secure", "access", "engage", "bypass", "finish"];


var pickedWord = gameObjectArray[Math.floor(Math.random() * gameObjectArray.length)];



var gameStarted = false;










//var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




var playButton = document.getElementById("play");













playButton.onclick = function () {
    gameStarted = true;
    newGame = new Game(pickedWord);
    console.log("Game object created");
    console.log(newGame);
    document.onkeyup = newGame.keyup;




    newGame.start();
    newGame.play();



}


function Game(currentWord) {
    this.word = currentWord;
    console.log("game");
    var letter;
    wordArray = currentWord.split("");
    var solved = [];
    var lettersGuessed = [];
    var wins = 0;
    var guessesRemaining;
    var wordArray;
    //var selectedWord;




    this.start = function () {
        pickedWord = gameObjectArray[Math.floor(Math.random() * gameObjectArray.length)];
        wordArray = pickedWord.split("");
        guessesRemaining = 12;

        for (var i = 0; i < wordArray.length; i++) {
            solved[i] = "_";

            selectedWord = solved.join(" ");
            document.getElementById("solvedWord").innerHTML = solved.join(" ");

        }

        document.getElementById("attempts").innerHTML = "Attempts remaining until shutdown: " + guessesRemaining;

        this.play();

    }



    this.keyup = function () //event to register keystrokes
    {
        var game = this;
        letter = event.key.toLowerCase();
        lettersGuessed.push(letter);
        guessesRemaining--

        console.log(letter);







    }

    this.play = function () {

        console.log("playing");

        for (i = 0; i < lettersGuessed.length; i++) {
            if (lettersGuessed[i] !== letter) {
                document.getElementById("guessed").innerHTML = " " + lettersGuessed;
            }
        }

        if (guessesRemaining >= 0) {
            this.compareKeys(currentWord, letter);
        }
        else if (guessesRemaining === 0) {
            this.start();
            lettersGuessed = [];
        }
        else if (solved.length = 6) {
            this.start();
            lettersGuessed = [];
        }
        else {

        }

    }

    this.compareKeys = function () {


        console.log("comparekeys");


        for (var i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === letter) {
                solved[i] = letter;
            }
        }
        selectedWord = solved.join(" ");
        document.getElementById("solvedWord").innerHTML = solved.join(" ");
        document.getElementById("attempts").innerHTML = "Attempts remaining until shutdown: " + guessesRemaining;
    }

}




























/*




onload = function () {

    pickedWord = gameObjectArray[Math.floor(Math.random() * gameObjectArray.length)];
    wordArray = pickedWord.split("");
    for (var i = 0; i < wordArray.length; i++) {
        solved[i] = "_";

        selectedWord = solved.join(" ");
        document.getElementById("solvedWord").innerHTML = solved.join(" ");

    }




}

//document.onkeyup = game.keyup;

//game.start outside

//create event.keyup in game object

//pickedWord can be created in the game object?

//workInProgress Submitting what I have to edit later.

//Put as much into the game object as possible.



playButton.onclick = function () {


    gameStarted = true;
    var newGame = new Game(pickedWord);
    console.log("Game object created");
    console.log(newGame);

    document.onkeyup = function (event) //event to register keystrokes
    {

        letter = event.key.toLowerCase();
        lettersGuessed.push(letter);
        guessesRemaining--;

        if (guessesRemaining >= 0) {
            newGame.compareKeys(pickedWord, letter);
        }
        else if (guessesRemaining === 0) {
            onload();
            lettersGuessed = [];
        }
        else if (solved.length = 6) {
            onload();
            lettersGuessed = [];

        }
        else {

        }


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
        document.getElementById("guessed").innerHTML = " " + lettersGuessed;






        selectedWord = solved.join(" ");
        document.getElementById("solvedWord").innerHTML = solved.join(" ");




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













