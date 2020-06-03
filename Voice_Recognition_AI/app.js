const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = ['Im good how about you?', 'Doing good', 'leave me alone', 'the weather is good and so am I'];
const weather = ['Weather is fine', 'Look through a window', 'We\'re dutch, so it cant be good'];
const music = ['i like Red Hot Chili Peppers', 'music that makes me cry', 'yea yea yea yea'];
const restaurant = ['You can\'t even go due to corona anyway', 'anything thats fast', 'Macdonalds sounds good'];
const corona = ['Corona is taking longer then expected']


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice is activated, you can talk now')
};

recognition.onresult = function(event) {
const current = event.resultIndex;
const transcript = event.results[current][0].transcript;
content.textContent = transcript;
readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I Couldnt hear your bad accent';

    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
 speech.text = finalText;
     }else if(message.includes('weather')){
         const finalText = weather[Math.floor(Math.random() * weather.length)];
         speech.text = finalText;
     }else if(message.includes('restaurant')){
        const finalText = restaurant[Math.floor(Math.random() * restaurant.length)];
        speech.text = finalText;
     }else if(message.includes('music')){
        const finalText = music[Math.floor(Math.random() * music.length)];
        speech.text = finalText;
     }else if(message.includes('corona')){
        const finalText = corona[Math.floor(Math.random() * corona.length)];
        speech.text = finalText;
     }
 
    speech.volume = 1;
    speech.rate = 0.8;
    speech.pitch = 1.25;
    window.speechSynthesis.speak(speech)
}
