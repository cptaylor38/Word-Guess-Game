var game = {  //realized i was using ; instead of , for all of the properities within this object.
    lettersGuessed: [], //creating array to store the letters already input 
    wins: 0, //number of times user guessed word correctly
    guessesRemaining: 12, //number of guesses - reduced inside game function
    gameObjectArray: ["secure", "access", "engage", "bypass", "finish"],
    pickedWord: '',
    gameStarted: false,
    wordArray: [],
    solved: [],
    selectedWord: '',
    currentWord: '',

    init: function () {
        var self = this;
        document.onkeyup = function (event) {   //onkey event
            self.handleLetter(event.key.toLowerCase()); //passing onkey event - event - to handleLetter function
        }
        document.getElementById('play').onclick = function () {  //calling play function at play button onclick event
            self.handlePlay();
        }
    },

    handleLetter: function (letter) {
        console.log(letter);
        var self = this;
        var usedLetters = self.lettersGuessed;
        var guessesLeft = self.guessesRemaining;
        var currentLetter = letter;
        usedLetters.push(currentLetter);
        guessesLeft--;

        if (guessesLeft >= 0) {
            self.compareKeys(currentLetter);
        }
        else if (guessesLeft === 0) {
            onload();
            usedLetters = [];
        } else if (solved.length = 6) {
            onload();
            usedLetters = [];

        } else {

        }
    },

    handlePlay: function () {
        var self = this;
        console.log('play');
        this.pickedWord = this.gameObjectArray[Math.floor(Math.random() * this.gameObjectArray.length)];  // or something like this

        self.onload();
    },

    onload: function () {
        var self = this;
        var currentWord = self.pickedWord;
        var solved = self.solved;
        // pickedWord = gameObjectArray[Math.floor(Math.random() * gameObjectArray.length)];
        wordArray = self.pickedWord.split("");
        for (var i = 0; i < wordArray.length; i++) {
            solved[i] = "_";
            selectedWord = solved.join(" ");
            document.getElementById("solvedWord").innerHTML = solved.join(" ");
        }
        console.log(currentWord);
    },

    compareKeys: function (currentLetter) {
        var self = this;
        var newLetter = currentLetter;
        var solved = self.solved;
        var lettersUsed = this.lettersGuessed;
        // wordArray = currentWord.split("");
        var splitWord = wordArray;
        var guessesLeft = this.guessesRemaining;

        for (var i = 0; i < splitWord.length; i++) {
            if (splitWord[i] === newLetter) {
                solved[i] = newLetter;
            }
            else {
                console.log("need to fix this");
            }
        }

        document.getElementById("guessed").innerHTML = " " + lettersUsed;

        selectedWord = solved.join(" ");
        document.getElementById("solvedWord").innerHTML = solved.join(" ");
        document.getElementById("attempts").innerHTML = "Attempts remaining until shutdown: " + guessesLeft;
    }
}

game.init();