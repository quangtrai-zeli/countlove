const get_day_of_time = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1) / (24*60*60*1000));
};

let birthday = new Date("2022-04-30T12:11:00Z");

let today = new Date();

    let time = get_day_of_time(birthday,today);
    days = document.querySelector('.count-days span');
    days.innerHTML = time;

setInterval(function () {
    let time = get_day_of_time(birthday,today);
    days = document.querySelector('.count-days span');
    days.innerHTML = time;
}, 100000);