document.querySelector("button").addEventListener("click", function(){
    roll();
    changeStyle(this);
})

function roll() {

    /***** First Dice *****/
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var src1 = "images/dice" + randomNumber1 + ".png"; 
    var img1 = document.querySelector("#img1");
    img1.setAttribute("src", src1);

    /***** Second Dice *****/
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var src2 = "images/dice" + randomNumber2 + ".png"; 
    var img2 = document.querySelector("#img2");
    img2.setAttribute("src", src2);

    /***** Message *****/
    var heading = document.querySelector("h1");
    if (randomNumber1>randomNumber2) {
        heading.innerText = "🚩Player 1 Wins!";
        heading.style.margin = "20px";
    } else if (randomNumber1<randomNumber2) {
        heading.innerText = "Player 2 Wins 🚩";
        heading.style.margin = "20px";
    } else {
        heading.innerText = "Draw!"
        heading.style.margin = "25px";
    }

}

function changeStyle(button) {
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    }, 200)   
}
