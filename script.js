const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");
const error = document.querySelector('.error-para');

convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;

    if (!speechSynth.speaking && !enteredText.trim().length) {
        error.textContent = `Nothing to Convert!`;
    } else {
        const utternace = new SpeechSynthesisUtterance(enteredText);
        speechSynth.speak(utternace);
    }
});