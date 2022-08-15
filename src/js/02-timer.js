
const input = document.querySelector("#datetime-picker");
input.style.width = "220px";
input.style.height = "35px";
input.style.marginLeft = "5px";
const btn = document.querySelector("button[data-start]");
btn.style.width = "58px";
btn.style.height = "35px";
const timer = document.querySelector(".timer");
timer.style.display = "flex";
const fields = document.querySelectorAll(".field");
const values = document.querySelectorAll(".value");
const labels = document.querySelectorAll(".label");
for (let i = 0; i < fields.length; i++) {
    
    fields[i].style.display = "flex";
    fields[i].style.flexDirection = "column";
    fields[i].style.justifyContent = "center";
    fields[i].style.alignItems = "center";
    fields[i].style.width = "70px";

}
for (let i = 0; i < values.length; i++) {
    
    values[i].style.fontSize = "35px";
    
}
for (let i = 0; i < labels.length; i++) {
    
    labels[i].style.fontSize = "15px";
    labels[i].style.fontWeight = "bold";
    
}
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

btn.disabled = true;
let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      
    if (selectedDates[0] < new Date()) {
        alert("Please choose a date in the future")
    } else {
            console.log(selectedDates[0]);
      btn.disabled = false;
      return selectedDate = selectedDate[0];
      }
  },
};

flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) /  minute) ;
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };

}

function addLeadingZero(number) {
  
  if (`${ number }` < 10) {
    
    return number = `${number}`.padStart(2, "0");
  } else {
    return `${number}`;
  };

}
let daysHtml = document.querySelector('[data-days]');
let hoursHtml = document.querySelector('[data-hours]');
let minutesHtml = document.querySelector('[data-minutes]');
let secondsHtml = document.querySelector('[data-seconds]');

const getDifference = () => {
  const todayTime = new Date().getTime();
  const difference = selectedDate.getTime() - todayTime;
  //console.log(convertMs(difference));//
  //console.log(difference);//
  if (difference < 1000) {
    clearInterval(timerId);
  }
  const resultDays = convertMs(difference).days;
  daysHtml.textContent = addLeadingZero(resultDays);

  const resultHours = convertMs(difference).hours;
  hoursHtml.textContent = addLeadingZero(resultHours);

  const resultMinutes = convertMs(difference).minutes;
  minutesHtml.textContent = addLeadingZero(resultMinutes);

  const resultSeconds = convertMs(difference).seconds;
  secondsHtml.textContent = addLeadingZero(resultSeconds);
};

let timerId = null;
btn.addEventListener('click', () => {
  btn.disabled = true;
  getDifference();
  timerId = setInterval(() => {
    getDifference();
  }, 1000);
});

