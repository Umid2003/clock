const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');


setInterval(() => {
    const date = new Date();
    const hourTime = date.getHours();
    const minuteTime = date.getMinutes();
    const secondTime = date.getSeconds();

    const hourRotate = 30 * hourTime + minuteTime / 2;
    const minuteRotate = 6 * minuteTime;
    const secondRotate = 6 * secondTime;

    hour.style.transform = `rotate(${hourRotate}deg)`;
    minute.style.transform = `rotate(${minuteRotate}deg)`;
    second.style.transform = `rotate(${secondRotate}deg)`;
}, 1000)

setInterval(createClock, 100);

function createClock() {
    const clock = document.createElement('i');
    clock.classList.add('far');
    clock.classList.add('fa-clock');


    clock.style.left = `${Math.random() * window.innerWidth}px`;
    clock.style.animationDuration = `${Math.random() * 3 + 2}s`;
    clock.style.opacity = Math.random();
    clock.style.fontSize = `${Math.random() * 10 + 10}px`;
    document.body.append(clock);

    setTimeout(() => {
        clock.remove();
    }, 4000);
}