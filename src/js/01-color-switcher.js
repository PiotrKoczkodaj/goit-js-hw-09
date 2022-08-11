const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeBackgroudColor = () => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
    btnStart.disabled = true;
};

const stopChanging = () => { 
    clearInterval(timerId);  
    btnStart.disabled = false;
};

btnStart.addEventListener("click",()=> timerId = setInterval(changeBackgroudColor, 1000));
btnStop.addEventListener("click",stopChanging);
