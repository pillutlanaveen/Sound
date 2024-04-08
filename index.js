var x = document.querySelectorAll('.drum').length;

for(i=0; i<x; i++)
{
    document.querySelectorAll('.drum')[i].addEventListener('click',handleclick);
}

document.addEventListener('keypress',function(e){

    keyclick(e.key);
});

function handleclick(){
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML){
     case 'w': var audio = new Audio("sounds/tom-2.mp3")
     audio.play();
          break;
    
     case 'a': var audio = new Audio("sounds/tom-3.mp3")
     audio.play();
        break;
     case 's': var audio = new Audio("sounds/tom-1.mp3")
     audio.play();
            break;
     case 'd': var audio = new Audio("sounds/tom-4.mp3")
     audio.play();
         break;
     
     case 'j': var audio = new Audio("sounds/crash.mp3")
     audio.play();
         break;
     case 'k': var audio = new Audio("sounds/kick-bass.mp3")
                 audio.play();
                    break;
     default:alert("wrong button");
     break;
    }
}


     function keyclick(key){
        switch (key){
         case 'w': var audio = new Audio("sounds/tom-2.mp3")
         audio.play();
              break;
        
         case 'a': var audio = new Audio("sounds/tom-3.mp3")
         audio.play();
            break;
         case 's': var audio = new Audio("sounds/tom-1.mp3")
         audio.play();
                break;
         case 'd': var audio = new Audio("sounds/tom-4.mp3")
         audio.play();
             break;
         
         case 'j': var audio = new Audio("sounds/crash.mp3")
         audio.play();
             break;
         case 'k': var audio = new Audio("sounds/kick-bass.mp3")
                     audio.play();
                        break;
         default:alert("wrong button");
         break;
    
    }
}