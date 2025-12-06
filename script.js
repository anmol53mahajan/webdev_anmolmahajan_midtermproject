let flag=false
let timerId = null;
let timeLeft = 0;
let originalTime = 0;
Notification.requestPermission();
let display=document.querySelector('.timer-display')
let startbtn=document.querySelector('#start-btn')
let resetbtn=document.querySelector('#reset-btn')
let changebtn=document.querySelector('.change-time-btn')
let minSpan = document.querySelector('.min');
let secSpan = document.querySelector('.sec');

function getTimeInSeconds() {
    let min = Number(minSpan.textContent);
    let sec = Number(secSpan.textContent);

    return min * 60 + sec;
}

startbtn.addEventListener('click',function(){
    if (timerId !== null) return;
    let timeLeft = getTimeInSeconds();
    originalTime = timeLeft;
    minSpan.contentEditable = false;
    secSpan.contentEditable = false;
    minSpan.style.borderBottom = "none";
    secSpan.style.borderBottom = "none";
    timerId = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        minSpan.textContent = String(minutes).padStart(2, "0");
        secSpan.textContent = String(seconds).padStart(2, "0");

        console.log(timeLeft);
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerId);
            timerId = null;

            new Notification("Timer finished!");

            let beep = new Audio("timer_alarm.mp3");
            beep.play();
        }
    }, 1000);
})
resetbtn.addEventListener('click', function() {
    clearInterval(timerId);
    timerId = null;

    let minutes = Math.floor(originalTime / 60);
    let seconds = originalTime % 60;

    minSpan.textContent = String(minutes).padStart(2, "0");
    secSpan.textContent = String(seconds).padStart(2, "0");
});
changebtn.addEventListener('click', function() {
    minSpan.contentEditable = true;
    secSpan.contentEditable = true;

    minSpan.style.borderBottom = "2px solid white";
    secSpan.style.borderBottom = "2px solid white";
});
