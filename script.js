score = 0;
flippedOver = 0;    //how many cards are flipped
square1 = 0;
square2 = 0;
l1 = 0;
l2 = 0;
l3 = 0;
l4 = 0;
l5 = 0;
l6 = 0;
l7 = 0;
l8 = 0;
l9 = 0;
l10 = 0;
l11 = 0;
l12 = 0;
l13 = 0;
l14 = 0;
l15 = 0;
l16 = 0;


function flipSquare(id) {    
    //changes the image of the squares
    if(id == l1 || id == l9) {
        document.getElementById(id).src = "panda1.jpeg";
    }
    if(id == l2 || id == l10) {
        document.getElementById(id).src = "panda2.jpeg";
    }
    if(id == l3 || id == l11) {
        document.getElementById(id).src = "panda3.jpeg";
    }
    if(id == l4 || id == l12) {
        document.getElementById(id).src = "panda4.jpeg";
    }
    if(id == l5 || id == l13) {
        document.getElementById(id).src = "grabbedrat.jpeg";
    }
    if(id == l6 || id == l14) {
        document.getElementById(id).src = "staringrat.jpeg";
    }
    if(id == l7 || id == l15) {
        document.getElementById(id).src = "fluffyrat.gif.MOV";
    }
    if(id == l8 || id == l16) {
        document.getElementById(id).src = "torpedorat.gif.MOV";
    }
    

    if(flippedOver == 0) {
        if(square1 !== id) {   
            square1 = id;
            flippedOver++;
        }
    } else if(flippedOver == 1) {
        square2 = id;
        flippedOver++;
        matchSquares(square1, square2);
    }
}

function initalize(){
        pool = [1,2,3,4,5,6,7,8];
        usage = [2,2,2,2,2,2,2,2];
        counter = 1;
        while (counter <= 16){
        var temp = parseInt(Math.random()*pool.length+1);
        eval("l"+counter +'=' +temp);
        usage[temp-1]--;
        if (usage[temp-1]==0){
            usage.splice(temp-1,temp);
            pool.splice(temp-1,temp);
        }
        counter++;
        }
}

//checks to see if the squares match
function matchSquares() {
    flippedOver = 0;    //sets the flipped squares to 0
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
    if(document.getElementById(square1).src == document.getElementById(square2).src) {
        document.getElementById(square1).removeAttribute("onclick");
        document.getElementById(square2).removeAttribute("onclick");
    } else {        //sets the image back to the question mark
        setTimeout(delayedreset,1000);
    }
}
function delayedreset(){
    document.getElementById(square1).src = "question.png";
    document.getElementById(square2).src = "question.png";
    square1 = square2 = "";
}
//resets the game
function reset() {
    score = 0;
    flippedOver = 0;
    square1 = square2 = "";
    document.getElementById("score").innerHTML = "Score: " + score;
    //resets all grid images to question marks
    for(let i = 1; i <= 16; i++) {
        document.getElementById(i).src = "question.png";
    }
}



//shuffles the images on the grid
function hiddenImages(){
    storage = ["panda1.jpeg","panda2.jpeg", "panda3.jpeg", "panda4.jpeg","fluffyrat.gif.MOV","torpedorat.gif.MOV","grabbedrat.jpeg","staringrat.jpeg"];
    usage = [2,2,2,2,2,2,2,2];
    counter = 1;
    while (counter <= 16){
        var temp = Math.random()*8;
        eval("image"+counter).src =  storage[temp];
        usage[temp]--;
        if (usage[temp]==0){
            usage.splice(temp,1);
        }
    }
    document.getElementById("1").innerHTML.src = img1;
    
}