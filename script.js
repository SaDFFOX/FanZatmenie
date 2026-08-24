// Простая анимация для визуального эффекта
const countElement = document.querySelector('.slider-count');

if (countElement) {
    let current = 1;
    setInterval(() => {
        current = current >= 3 ? 1 : current + 1;
        countElement.textContent = `0${current} / 03`;
    }, 4000);
}
