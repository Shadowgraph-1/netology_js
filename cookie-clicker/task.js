const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookie.onclick = () => {
    let clicks = parseInt(counter.textContent);
    clicks++;
    counter.textContent = clicks;

    if (clicks % 2 === 0) {
        cookie.width = 200;
        cookie.height = 200;
    } else {
        cookie.width = 250;
        cookie.height = 250;
    }
};