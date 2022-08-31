let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
// 360 degree / 60 = 6deg
let degreeRot = 6;
// 360 degree / 12hour = 30 degree
let degreeHour = 30;

setInterval(clockhanlder, 1000);

function clockhanlder() {
    let d = new Date();
    let h = d.getHours() * degreeHour;
    let s = d.getSeconds() * degreeRot;
    let m = d.getMinutes() * degreeRot;
    

   hour.style.transform = `rotateZ(${h + (m / 12)}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s}deg)`
}