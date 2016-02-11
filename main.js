(function(){
  var startButton = document.querySelector('.start-button');
  var resumeButton = document.querySelector('.resume-button');
  var resetButton = document.querySelector('.reset-button');
  var stopButton = document.querySelector('.stop-button');
  var lapButton = document.querySelector('.lap-button');


  function startClick(){
    //start timer & keep fields updated

    //change to button layout 2
    document.querySelector("#button-holder-1").style.display = 'none';
    document.querySelector("#button-holder-3").style.display = 'block';
  }
  function resumeClick(){
    //change to button layout 2
    document.querySelector("#button-holder-2").style.display = 'none';
    document.querySelector("#button-holder-3").style.display = 'block';
  }
  function resetClick(){

    //change to button layout 2
    document.querySelector("#button-holder-2").style.display = 'none';
    document.querySelector("#button-holder-1").style.display = 'block';
  }
  function stopClick(){

    //change to button layout 2
    document.querySelector("#button-holder-3").style.display = 'none';
    document.querySelector("#button-holder-2").style.display = 'block';
  }
  function lapClick(){
    //update saved times
    console.log();
    var curLap = 4;
    var totalTime = '12:20.09';
    var lapTime = '2:00.00';
    var newTime = '<li>';
    newTime += '<span class="lap-number">'+ curLap +'</span>';
    newTime += '<span class="total-time">'+ totalTime +'</span>';
    newTime += '<span class="split-time">'+ lapTime +'</span>';
    newTime += '</li>';
    // document.querySelector(".saved-times>ul").innerHTML() += newTime;
    console.log( document.querySelector(".saved-times>ul") );
  }
startButton.addEventListener( 'click', startClick );
resumeButton.addEventListener( 'click', resumeClick );
resetButton.addEventListener( 'click', resetClick );
stopButton.addEventListener( 'click', stopClick );
lapButton.addEventListener( 'click', lapClick );
}())
