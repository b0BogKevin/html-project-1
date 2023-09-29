
var mode = 1;

function modeSwitch() {
    console.log(mode)
    if (mode ==1) {
        document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/8c/5b/6d/8c5b6d081c50309c7fd17b6aa0c02d10.jpg")';
        document.getElementById("gomb").src = "images/moon.png";
        document.body.style.color = "rgb(255,228,224)";
    }
    else{
        document.body.style.backgroundImage  = 'url("https://i.pinimg.com/originals/70/45/26/7045261074a625f94f66de3a86475fa6.jpg")';
        document.getElementById("gomb").src = "images/brightness.png";
        document.body.style.color = "rgb(0, 27, 39)";


    }

    mode *=-1;
}