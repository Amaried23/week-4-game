$( document ).ready(function(){
  var random=Math.floor(Math.random()*101+19)
  // creates random number between 19 - 120
  //
  $('#randomNumber').text(random);

 var totalscore= 0;
 var wins= 0;
 var losses= 0;

$('#Win').text(wins);
$('#loss').text(losses);



var gem1= Math.floor(Math.random()*11+1);
$('#one').on ('click', function(){
    totalscore = totalscore + gem1;
    
    $('#yourScore').text(totalscore);  

        if (totalscore == random){
          youWin();
        }
        else if (totalscore > random){
          youLose();
        }   
  })  

var gem2= Math.floor(Math.random()*11+1)
$('#two').on ('click', function(){
    totalscore = totalscore + gem2;
    
    $('#yourScore').text(totalscore);  

     if (totalscore == random){
          youWin();
        }
        else if (totalscore > random){
          youLose();
        } 
    
  })  

var gem3= Math.floor(Math.random()*11+1)
$('#three').on ('click', function(){
    totalscore = totalscore + gem3;
   ;
    $('#yourScore').text(totalscore); 

     if (totalscore == random){
          youWin();
        }
        else if (totalscore > random){
          youLose();
        }  
  }) 

var gem4= Math.floor(Math.random()*11+1)
$('#four').on ('click', function(){
    totalscore = totalscore + gem4;
    console.log("New totalscore= " + totalscore);
    $('#yourScore').text(totalscore); 

    if (totalscore == random){
          youWin();
        }
        else if (totalscore > random){
          youLose();
        }   

  })

function reset(){
      random=Math.floor(Math.random()*101+19);
    
      $('#randomNumber').text(random);
      gem1= Math.floor(Math.random()*11+1);
      gem2= Math.floor(Math.random()*11+1);
      gem3= Math.floor(Math.random()*11+1);
      gem4= Math.floor(Math.random()*11+1);
      totalscore= 0;
      $('#yourScore').text(totalscore);
      } 
    


function youWin(){
alert("You won!");
  wins++; 
  $('#Win').text(wins);
  reset();
}

function youLose(){
alert ("You lose!");
  losses++;
  $('#loss').text(losses);
  reset();
}

});