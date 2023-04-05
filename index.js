let hour = document.querySelector(".hour");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");

let set_clock = setInterval(() => {

    let main_date = new Date();

    let hr = main_date.getHours();
    let min = main_date.getMinutes();
    let sec = main_date.getSeconds();

    let calc_hr = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (sec / 10);
    let calc_sec = (sec * 6);

    hour.style.transform = `rotate(${calc_hr}deg)`;
    minute.style.transform =`rotate(${calc_min}deg)`;
    second.style.transform = `rotate(${calc_sec}deg)`;
}, 1000)