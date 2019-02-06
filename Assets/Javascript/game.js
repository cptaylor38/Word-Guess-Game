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
        var guessesRemaining = self.guessesRemaining;
        document.onkeyup = function (event) {   //onkey event
            guessesRemaining--;
            self.handleLetter(event.key.toLowerCase(), guessesRemaining); //passing onkey event - event - to handleLetter function

        }
        document.getElementById('play').onclick = function () {  //calling play function at play button onclick event
            self.gameStarted = true;
            self.handlePlay();
        }
        console.log("init f");
    },

    handleLetter: function (letter, guessesRemaining) {
        console.log(letter);
        var self = this;
        self.gameStatus(letter, guessesRemaining);

        console.log("handleLetter f");

        //self.compareKeys(letter, guessesRemaining);
        /*var usedLetters = self.lettersGuessed;
        var guessesLeft = self.guessesRemaining;
        var currentLetter = letter;*/




    },

    handlePlay: function () {
        var self = this;
        console.log('play f');
        this.pickedWord = this.gameObjectArray[Math.floor(Math.random() * this.gameObjectArray.length)];  // or something like this
        self.lettersGuessed = [];
        self.onload();
        document.getElementById("guessed").innerHTML = " ";

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
        if (!self.gameStarted) {
            self.init();
        }
        console.log("onload f");

    },

    compareKeys: function (currentLetter, guessesRemaining) {
        var self = this;
        var newLetter = currentLetter;
        var solved = self.solved;
        var lettersUsed = self.lettersGuessed;
        // wordArray = currentWord.split("");
        var splitWord = wordArray;


        for (var i = 0; i < splitWord.length; i++) {
            if (splitWord[i] === newLetter) {
                solved[i] = newLetter;
            }
            else {
                console.log("need to fix this");
            }
        };

        document.getElementById("guessed").innerHTML = " " + lettersUsed;

        selectedWord = solved.join(" ");
        document.getElementById("solvedWord").innerHTML = solved.join(" ");
        document.getElementById("attempts").innerHTML = "Attempts remaining until shutdown: " + guessesRemaining;
        console.log("compareKeys f");
    },

    gameStatus: function (letter, guessesRemaining) {
        console.log("gameStatus f");
        var self = this;
        var lettersGuessed = self.lettersGuessed;
        if (guessesRemaining >= 0) {
            self.compareKeys(letter, guessesRemaining);
            lettersGuessed.push(letter);
        }
        else {
            self.gameStarted = false;
            self.handlePlay();
        }
    }
}

game.init();