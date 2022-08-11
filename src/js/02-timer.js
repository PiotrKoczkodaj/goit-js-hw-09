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
