var SpeechRecognition = window.webkitSpeechRecognition;
var Recog = new SpeechRecognition();

function start(){
     document.getElementById("textarea").innerHTML = " ";
     Recog.start()
}

Recog.onresult = function(event){
     console.log(event);
     var content = event.results[0][0].transcript;
     document.getElementById("textarea").innerHTML = content;

     speak();
}

function speak(){
     var spoke = window.speechSynthesis; 
     var speak_text = document.getElementById("textarea").value;
     var speak_data = new SpeechSynthesisUtterance(speak_text);

     spoke.speak(speak_data);
     Webcam.attach(webCam);
}
var webCam = document.getElementById("cam");

Webcam.set({
     width: 360,
     height: 250,
     image_format: 'png',
     png_quality: 100 
})