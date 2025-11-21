const stateDay = document.getElementById('stateDay')
const weekDay = document.getElementById('weekDay')
const timeDay = document.getElementById('timeDay')
const countDay = document.getElementById('countDay')

let date = new Date()
let deadline = '01 January 2026'
let dateStop = new Date(deadline).getTime()
let dateNow = new Date().getTime()

let timeNewYear = (dateStop - dateNow) / 1000
let days = Math.floor((timeNewYear / 60 / 60) / 24)
let hours = Math.floor((timeNewYear / 60 / 60) % 24)
let minutes = Math.floor((timeNewYear / 60) % 60)
let seconds = Math.floor(timeNewYear % 60)

let hoursNow = date.getHours();

if (hoursNow >= 5 && hoursNow < 12) {
    stateDay.textContent = "ое утро";
} else if (hoursNow >= 12 && hoursNow < 18) {
    stateDay.textContent = "ый день";
} else if (hoursNow >= 18 && hoursNow < 23) {
    stateDay.textContent = "ый вечер";
} else {
    stateDay.textContent = "ой ночи";
}
countDay.textContent = days;

let options = { weekday: "long" };
weekDay.textContent = new Intl.DateTimeFormat("ru-RU", options).format(date);

const addZero = (num) => (num < 10 ? '0' + num : num);
timeDay.textContent = addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());

countDay.textContent = days