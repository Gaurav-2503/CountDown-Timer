const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const mahaShivratri = '18 february 2023';

function countdown() {
    const mahaShivratriDate = new Date(mahaShivratri);
    const currentDate = new Date();

    // mahaShivratriDate - currentDate gives miliseconds 
    const totalseconds = (mahaShivratriDate - currentDate)/1000;

    const days = Math.floor(totalseconds/ 3600 / 24);
    
    const hours =  Math.floor(totalseconds/3600)%24;
    
    const minutes =  Math.floor(totalseconds/60)%60;
    
    const seconds = Math.floor(totalseconds)%60;


    daysEl.innerHTML =  formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);


    // console.log((mahaShivratriDate - currentDate))
    // console.log(days , hours , minutes , seconds);
}

function formatTime(time) {

    return time < 10 ? `0${time}` : time;

}

countdown();

setInterval(countdown , 1000);