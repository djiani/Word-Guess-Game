
$(document).ready(function(){
    
    const ListGame = [
        {img:"mango.jpg", desc:"i am a fruit", wordToGuess:"mango"}, 
        {img:"apple.jpg", desc:"i am a fruit", wordToGuess:"apple"},
        {img:"pineapple.jpg", desc:"i am a fruit", wordToGuess:"pineapple"},
        {img:"house.jpg", desc:"i am a house", wordToGuess:"house"}
    ];

    document.onkeyup(function(event){
        let currentObject = ListGame[Math.floor(Math.random()* ListGame.length)];
        $(".image").attr("src", "assets/images/"+ currentObject.img);
        $(".desc").html(currentObject.desc);
        $(".currentWord").html(currentObject.wordToGuess);
    })
})




