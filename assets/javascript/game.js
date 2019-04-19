
$(document).ready(function () {

    //replace each letter of the word by -
    function getWordToGuess(str){
        let strOut = "";
        for(i=0; i<str.length; i++){
            strOut +="- "
        }
        return strOut;
    };

    const ListGame = [
        { img: "mango.jpg", desc: "i am a fruit", wordToGuess: "mango" },
        { img: "apple.jpg", desc: "i am a fruit", wordToGuess: "apple" },
        { img: "pineapple.jpg", desc: "i am a fruit", wordToGuess: "pineapple" },
        { img: "house.jpg", desc: "i am a house", wordToGuess: "house" }
    ];

    let currentObject = {};
    let isGameStarted = false;
    let maxNumGuess = 0;
    document.onkeyup = (function (event) {
        if(event.key === "Enter" && !isGameStarted){
            //Game initialization
            isGameStarted = true; 
            $('.startGame').text("Game on!");
            $('.startGameDesc').text(`could you guessed the word below?`);
            let currentObject = ListGame[Math.floor(Math.random() * ListGame.length)];
            $(".card-img-top").attr("src", "assets/images/" + currentObject.img);
            $(".desc").html(currentObject.desc);
            $(".currentWord").html(getWordToGuess(currentObject.wordToGuess));
            maxNumGuess = currentObject.wordToGuess.length + 5; 
            $(".TotalGuessRemaining").text(maxNumGuess);
        }
        else if(isGameStarted){
            //collected user input and implement the core logic of the game here!

            
        }
        
    });

    


});




