var arr = ["THIRTEEN", "THURSDAY", "PRINCESS", "LANGUAGE", "AMERICAN", "FOOTBALL", "MEMORIES", "HOSPITAL"];
var mistakes = 0;
var lives=6;
var guesses=[];

var answer = arr[Math.floor(Math.random() * arr.length)];
console.log(answer);
function letterHandler(chosenLetter) {
    document.getElementById(chosenLetter).disabled = true;
    for (var i = 0; i < 8; i++) {
        var flag = 0;
        if(answer.indexOf(chosenLetter)>=0)
        {
            flag = 1;
            if (answer[i]===chosenLetter) {
                guesses.push(chosenLetter);
                console.log(guesses);
            var index=i;
            index++;
            document.getElementById("box"+ index).value = chosenLetter;
            victory();
          
            
            }  
        }

    }
    if(flag==0){
        
        mistakes++;
        lives--;
        console.log(lives);
        if (mistakes === 6) {
            document.getElementById("result").innerHTML = 'You Lost!!!';
            document.getElementsByTagName("button").disabled=true;
        }
            
        }
        //updating mistakes and the lives
       document.getElementById("mistakes").innerHTML="MISTAKES: "+mistakes;
       document.getElementById("lives").innerHTML="LIVES: "+lives;
       //updating the picture
       document.getElementById('image').src = 'images/' + mistakes +'.jpg';

       

    }
    //function reset(){
        //window.location.reload();
    //}

function victory(){
        if((mistakes<6)&& (guesses.length==8)){
            document.getElementById("result").innerHTML = 'You Won!!!';
            document.getElementsByTagName("button").disabled=true;
        }
        
    }


    
