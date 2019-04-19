
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
    let isGameStarted = false;
    let numGuessRem = 0;
    let displayWordToGuess = "";
    let wordToGuess = "";
    let userGuess = '';
    let totalWins = 0;
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


    document.onkeyup = (function (event) {
        if (event.key === "Enter" && !isGameStarted) {
            //Game initialization
            isGameStarted = true;
            numGuessRem = 0;
            displayWordToGuess = "";
            wordToGuess = "";
            letterAlreadyGuess = [];
            $('.startGame').text("Game on!");
            $('.startGameDesc').text(`could you guessed the word below?`);
            let currentObject = ListGame[Math.floor(Math.random() * ListGame.length)];
            $(".card-img-top").attr("src", "assets/images/" + currentObject.img);
            $(".desc").html(currentObject.desc);
            wordToGuess = currentObject.wordToGuess;
            displayWordToGuess = printWordToGuess(displayWordToGuess, wordToGuess, '');
            $(".currentWord").html(displayWordToGuess);
            numGuessRem = wordToGuess.length + 5;
            $(".TotalGuessRemaining").text(numGuessRem);
        }
        else if (isGameStarted) {
            //collected user input and implement the core logic of the game here!
            if (numGuessRem > 0 && dashCount(displayWordToGuess) > 0) {
                console.log(event.key);
                userGuess = event.key;
                if (wordToGuess.includes(userGuess)) {
                    displayWordToGuess = printWordToGuess(displayWordToGuess, wordToGuess, userGuess);
                    $(".currentWord").html(displayWordToGuess);
                    if (dashCount(displayWordToGuess) === 0){
                        totalWins++;
                        $('.totalWins').text(totalWins);
                        //play sound
                        isGameStarted = false;
                    }
                } else {
                    if (!letterAlreadyGuess.includes(userGuess)) {
                        numGuessRem--;
                        letterAlreadyGuess.push(userGuess);
                        $(".TotalGuessRemaining").text(numGuessRem);
                        $(".LetterAlGuessed").text(letterAlreadyGuess.map(function (letter) { return `${letter} ` }));

                    }
                }
            }



        }

    });




});




