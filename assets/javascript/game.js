
$(document).ready(function () {

    //replace each letter of the word by -
    function printWordToGuess(displayWordToGuess, wordToGuess, userGuess) {
        if (displayWordToGuess == "") {
            for (let i = 0; i < wordToGuess.length; i++) {
                displayWordToGuess += "-";
            }
        } else {
            console.log(wordToGuess)
            let temp = "";
            for (let i = 0; i < wordToGuess.length; i++) {

                console.log(wordToGuess[i] + " compare to " + userGuess);
                if (wordToGuess[i] == userGuess) {
                    temp += userGuess;
                    //displayWordToGuess[i]= userGuess;
                    //console.log(displayWordToGuess[i]);

                } else {
                    temp += displayWordToGuess[i];
                }
            }
            console.log('temp: ' + temp);
            displayWordToGuess = temp;
            console.log('displayWordToGuess: ' + displayWordToGuess);
        }
        return displayWordToGuess;
    };

    function isUserGuest(userGuess, wordToGuess) {
        return (wordToGuess.includes(userGuess))
    }



    const ListGame = [
        { img: "mango.jpg", desc: "i am a fruit", wordToGuess: "mango" },
        { img: "apple.jpg", desc: "i am a fruit", wordToGuess: "apple" },
        { img: "pineapple.jpg", desc: "i am a fruit", wordToGuess: "pineapple" },
        { img: "house.jpg", desc: "i am a house", wordToGuess: "house" }
    ];

    let currentObject = {};
    let isGameStarted = true;
    let numGuessRem = 0;
    let displayWordToGuess = "";
    let wordToGuess = "";
    let userGuess = '';
    let totalWins = 0;
    let totalLoses = 0;
    let letterAlreadyGuess = [];

    function playGame(str) {
        let dashCount = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == '-') {
                dashCount++;
            }
        }
        return dashCount;
    }

    function dashCount(str) {
        let strmatch = str.match(/-/g)
        if (strmatch === null) {
            return 0
        } else {
            return strmatch.length;
        }
    }

    function displayString(str){
        let dispStr= "";
        for(let i=0; i<str.length; i++){
            dispStr += str[i]+" ";
        }
        return dispStr;
    }

    function GameInitialization() {
        numGuessRem = 0;
        displayWordToGuess = "";
        wordToGuess = "";
        letterAlreadyGuess = [];
        $('.startGame').text("Game on!");
        $('.startGameDesc').text(`Could you guessed the word below?`);
        let currentObject = ListGame[Math.floor(Math.random() * ListGame.length)];
        $(".card-img-top").attr("src", "assets/images/" + currentObject.img);
        $(".desc").html(currentObject.desc);
        wordToGuess = currentObject.wordToGuess;
        displayWordToGuess = printWordToGuess(displayWordToGuess, wordToGuess, '');
        $(".currentWord").html(displayString(displayWordToGuess));
        numGuessRem = wordToGuess.length + 5;
        $(".TotalGuessRemaining").text(numGuessRem);
        $(".LetterAlGuessed").text("-")
    }

    document.onkeyup = (function (event) {
        if (isGameStarted) {
            // first Game initialization
            isGameStarted = false;
            GameInitialization();
        }
        else
            if (numGuessRem > 0 && dashCount(displayWordToGuess) > 0) {
                console.log(event.key);
                userGuess = event.key;
                if (wordToGuess.includes(userGuess)) {
                    displayWordToGuess = printWordToGuess(displayWordToGuess, wordToGuess, userGuess);
                    $(".currentWord").html(displayString(displayWordToGuess));
                    if (dashCount(displayWordToGuess) === 0) {
                        totalWins++;
                        $('.totalWins').text(totalWins);
                        //play sound
                        isGameStarted = false;
                        GameInitialization();
                        console.log('game wins...');
                    }
                } else {
                    if (!letterAlreadyGuess.includes(userGuess)) {
                        numGuessRem--;
                        letterAlreadyGuess.push(userGuess);
                        $(".TotalGuessRemaining").text(numGuessRem);
                        $(".LetterAlGuessed").text(letterAlreadyGuess.map(function (letter) { return ` ${letter}  ` }));

                    }
                }
            } else {
                //losses
                totalLoses++;
                $('.totalLoses').text(totalLoses);
                isGameStarted = false;
                GameInitialization();

            }

    });




});




