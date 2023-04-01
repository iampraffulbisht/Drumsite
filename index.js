var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
       var buttoninnerHtml = this.innerHTML;
        makesound(buttoninnerHtml.toLocaleLowerCase());
        buttonanimatiion(buttoninnerHtml);
    });
}

document.addEventListener("keypress", function (event){
    if(event.key.toLocaleLowerCase() != "w" &&event.key.toLocaleLowerCase()!="a"&& event.key.toLocaleLowerCase() != "s" && event.key.toLocaleLowerCase() != "d" && event.key.toLocaleLowerCase() != "j" && event.key.toLocaleLowerCase() != "k" && event.key.toLocaleLowerCase() != "l"){

        alert(event.key+" is a Wrong Key!!");
       
        
    }
    makesound(event.key.toLocaleLowerCase());
    buttonanimatiion(event.key);
});
function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
           break;
        default:
            break;
    }
}
function buttonanimatiion(currkey){
    var activeButton = document.querySelector("."+ currkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}