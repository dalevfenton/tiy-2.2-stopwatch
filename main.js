(function(){
  var startButton = document.querySelector('.start-button');
  var resumeButton = document.querySelector('.resume-button');
  var resetButton = document.querySelector('.reset-button');
  var stopButton = document.querySelector('.stop-button');
  var lapButton = document.querySelector('.lap-button');
  var COUNTER = 0;
  var STOPTIME = 0;
  var curLap = 1;
  var totalTime = '';
  var lapTime = '';
  var lastLapTotal = 0;
  var myInterval;

  function leadingZeros ( numDigits, string ) {
    if( typeof string !== 'string'){
      string = String(string);
    }
    if( string.length >= numDigits){
      return string;
    }else if(string.length < numDigits){
      // console.log(string);
      return ( Array(numDigits+1).join('0') + string).slice( (numDigits * -1) );
    }
  }

  function getSubSeconds ( count ){
    return leadingZeros( 2, ( count % 100) );
  }
  function getSeconds ( count ){
    return leadingZeros( 2, (Math.floor(count / 100) % 60) ).slice(-2);
  }
  function getMinutes ( count ){
    return leadingZeros( 2, (Math.floor(count / 6000) % 3600) ).slice(-2);
  }
  function timeCheck(){
    COUNTER += 1;
    var subSeconds = getSubSeconds(COUNTER);
    var seconds = getSeconds(COUNTER);
    var minutes = getMinutes(COUNTER);

    //document.querySelector(".debug").innerHTML = COUNTER;
    document.querySelector(".sub-seconds").innerHTML = subSeconds;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".minutes").innerHTML = minutes;
  }

  function startClick(){
    //start timer & keep fields updated
    COUNTER = 0;
    myInterval = setInterval( timeCheck, 10 );

    //change to button layout 2
    document.querySelector("#button-holder-1").style.display = 'none';
    document.querySelector("#button-holder-3").style.display = 'block';
  }
  function resumeClick(){
    //restart timer
    myInterval = setInterval( timeCheck, 10 );
    //change to button layout 2
    document.querySelector("#button-holder-2").style.display = 'none';
    document.querySelector("#button-holder-3").style.display = 'block';
  }
  function resetClick(){
    //reset to start state
    COUNTER = 0;
    document.querySelector(".sub-seconds").innerHTML = '00';
    document.querySelector(".seconds").innerHTML = '00';
    document.querySelector(".minutes").innerHTML = '00';
    document.querySelector(".saved-times>ul").innerHTML = '';
    //change to button layout 2
    document.querySelector("#button-holder-2").style.display = 'none';
    document.querySelector("#button-holder-1").style.display = 'block';
  }

  function stopClick( ){
    //stop timer
    clearInterval( myInterval );
    //change to button layout 2
    document.querySelector("#button-holder-3").style.display = 'none';
    document.querySelector("#button-holder-2").style.display = 'block';
  }

  function lapClick(){
    //set total time string
    var minTime = getMinutes(COUNTER);
    var secTime = getSeconds(COUNTER);
    var subSecTime = getSubSeconds(COUNTER);
    totalTime =  minTime + ' : ' + secTime + ' . ' + subSecTime;
    //get the difference between the last lap and this one
    var lapDiff = COUNTER - lastLapTotal;
    //set new total
    lastLapTotal = COUNTER;
    //set lap output string
    var lapMin = getMinutes(lapDiff);
    var lapSec = getSeconds(lapDiff);
    var lapSubSec = getSubSeconds(lapDiff);
    var lapTime = lapMin + ' : ' + lapSec + ' . ' + lapSubSec;
    //build output and append
    var newTime = '<li>';
    newTime += '<span class="lap-number">'+ leadingZeros( 2, curLap ) +'</span>';
    newTime += '<span class="total-time">'+ totalTime +'</span>';
    newTime += '<span class="split-time">'+ lapTime +'</span>';
    newTime += '</li>';
    var curHTML = document.querySelector(".saved-times>ul").innerHTML;
    document.querySelector(".saved-times>ul").innerHTML = newTime + curHTML;
    //increment lap number
    curLap += 1;
  }

//event listeners for the buttons
startButton.addEventListener( 'click', startClick );
resumeButton.addEventListener( 'click', resumeClick );
resetButton.addEventListener( 'click', resetClick );
stopButton.addEventListener( 'click', stopClick );
lapButton.addEventListener( 'click', lapClick );
}());
