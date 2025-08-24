const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setDate(){
    const now=new Date();

    const seconds=now.getSeconds();
    secondHand.style.transform=`rotate(${6*seconds+90}deg)`;

    const minute=now.getMinutes();
    minuteHand.style.transform=`rotate(${6*minute+0.1*seconds+90}deg)`;



    const hour=now.getHours();
    hourHand.style.transform=`rotate(${30*hour+0.5*minute+90}deg)`;
}

setInterval(setDate,1000);
setDate();