var numberOfDrumButton = document.querySelectorAll('.drum').length;
for(i = 0 ; i<numberOfDrumButton; i++){
    var drum = document.querySelectorAll(".drum")[i].addEventListener('click',function(){
       var getLetter = this.innerHTML;
     MakeSound(getLetter);
     animation(getLetter);
  
    })

}

document.addEventListener('keypress',function(event){
    MakeSound(event.key);
    animation(event.key);
})

function MakeSound(key){
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;   
    
        default:
            break;
    }
}

function animation(getLetter){
  var activeButton = document.querySelector("."+getLetter);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
