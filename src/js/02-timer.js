
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
btn.addEventListener

