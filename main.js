x = 0;
y = 0;
screen_width="0"
screen_height="0"
apple="apple.png"
speak_data="to_number"Apples drawn""
to_number=""
draw_apple = "";

function preload() {
  apple = loadImage('apple.png');
}

screen_width=window.innerWidth;
screen_height=window.innerHeight;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  to_number = Number(content)
  if (Number.isInteger(to_number)) {
    status="Started drawing apple";
    draw_apple="set";
    
  }else {
    status="the speech has not recognized a number";
  }

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

if (draw_apple=="set") {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    Math.floor();
    Math.random(x*700);
    Math.random(y*400);
  }
}

function image() {
  draw_apple();
}

function speak() {
  
}
