let noOfButtons = document.querySelectorAll(".drum").length;

for(let i=0;i<noOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
      var expression=this.innerHTML;
      makesound(expression);
      });

    }

    document.addEventListener("keypress",function(event){
      makesound(event.key);
    })
     function makesound(expression){

        switch(expression){
          case"w": 
          var audio = new Audio("tom-1.mp3");
          audio.play();
          break;
              
          case"a":
          var audio = new Audio("tom-2.mp3");
          audio.play();
          break;
              
          case"s":
          var audio = new Audio("tom-3.mp3");
          audio.play();
          break;
 
          case"d":
          var audio = new Audio("tom-4.mp3");
          audio.play();
          break;
 
          case"j":
          var audio = new Audio("crash.mp3");
          audio.play();
          break;
 
          case"k":
          var audio = new Audio("kick-bass.mp3");
          audio.play();
          break;
 
          case"l":
          var audio = new Audio("snare.mp3");
          audio.play();
          break;
           
          default:
 
       }
      }
      
      
      
      
     
   
      
   
  
