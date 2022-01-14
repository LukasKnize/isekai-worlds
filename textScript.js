
let firstText = ["Hi I'm Water, cheap Aqua knockoff.", "Yea that useless Aqua from KonoSuba.", "And to be honest, I'm bit useless too...", "So, I will take you through the whole game.", "Basically all you need is to click as fast as possible."];


let currentTextArray = firstText;
let nthText = 0;
let currentText = currentTextArray[nthText];
let text = "";
let i = 0;
let speed = 200;
let ended = false;
let stillCanType = true;
currentText = currentText.split("");
let typing = setInterval(speak, speed);


function speak() {
    document.getElementById("textBoxOutput").innerHTML = text;
  text += currentText[i];
  i++;
  if (i == currentText.length + 1) {
    nthText++;
    if (nthText + 1 > currentTextArray.length) {
        clearInterval(typing);
        ended = true;
    }else{
        clearInterval(typing);
        text = "";
        i = 0;
        currentText = currentTextArray[nthText];
        currentText = currentText.split("");
        ended = true;
    }
  }
}

function nextText() {
    if (!ended) {
        text = "";
        i = 0;
        ended = true;
        clearInterval(typing);
        document.getElementById("textBoxOutput").innerHTML = currentTextArray[nthText];
        nthText++;
        currentText = currentTextArray[nthText];
        currentText = currentText.split("");
    }else{
        if (nthText + 1 <= currentTextArray.length) {
            typing = setInterval(speak, speed);
            ended = false;
        }else{
            document.getElementById("textBox").style.display = "none";
            ended = false;
        }
    }
}