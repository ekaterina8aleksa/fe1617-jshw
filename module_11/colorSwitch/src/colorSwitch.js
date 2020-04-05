const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let intervalId = null;
let isActive = false;
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () => {
    const colorNew = colors[randomIntegerFromInterval(0, colors.length - 1)];
    document.body.style.backgroundColor = colorNew;
};
startBtn.addEventListener('click', () => {
    if (isActive) {
        return;
    }
    isActive = true;
    intervalId = setInterval(() => {
        randomColor();
    }, 1000);
});
stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    isActive = false;
});
