var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    speak();
    
    document.getElementById("textbox").innerHTML = Content;

} 

function speak() {
    var synth = window.speechSynthesis

    var speakdata = document.getElementById("textbox").value;


    var utterThis = new SpeechSynthesisUtterance(speakdata);

    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.Set({
    width:1080,
    height:720,
    image_format: 'jpeg',
    jpeg_quality:180
});
camera = document.getElementById("camera");
