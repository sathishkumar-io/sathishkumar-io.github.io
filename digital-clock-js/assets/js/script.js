setInterval(()=> {
    digitalClock();
}, 1000);

(digitalClock)=()=> {
const dClock = document.querySelector('.digital-clock');
const dDay = document.querySelector('.digital-day');

const date = new Date();
let hour = zero(date.getHours());
dCycle = hour >= 12 ? `<span class="cycle">PM</span>` : `<span class="cycle">AM</span>`;
hour = zero(hour) % 12;
hour = zero(hour) ? zero(hour) : 12; // the hour '0' should be '12'
const min  = zero(date.getMinutes());
const sec  = zero(date.getSeconds());
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday"];
const day = date.getDay();
const todayDate = zero(date.getDate());
const month = zero(date.getMonth()+1);
const year = date.getFullYear();

dClock.innerHTML = `${hour}<span class="blink">:</span>${min}<span class="blink">:</span>${sec}${dCycle}`;
dDay.innerHTML = `${days[day]} - <span class="digital-date">${todayDate}/${month}/${year}</span>`;
};

function zero(x) {
    if (x < 10) {
        x = "0" + x;
    }

    return x;
};