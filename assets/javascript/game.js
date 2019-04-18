
$(document).ready(function () {

    const ListGame = [
        { img: "mango.jpg", desc: "i am a fruit", wordToGuess: "mango" },
        { img: "apple.jpg", desc: "i am a fruit", wordToGuess: "apple" },
        { img: "pineapple.jpg", desc: "i am a fruit", wordToGuess: "pineapple" },
        { img: "house.jpg", desc: "i am a house", wordToGuess: "house" }
    ];

    let currentObject = {};
    document.onkeyup = (function (event) {
        if(event.key === "Enter"){
            $('.startGame').text("Game on!");
            $('.startGame').after(`<p>could you guessed the word below?</p>`);
            let currentObject = ListGame[Math.floor(Math.random() * ListGame.length)];
            $(".card-img-top").attr("src", "assets/images/" + currentObject.img);
            $(".desc").html(currentObject.desc);
            $(".currentWord").html(currentObject.wordToGuess);
        }
        
    });

    


});




