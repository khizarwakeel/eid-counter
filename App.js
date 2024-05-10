
const endDate = new Date("17 June 2024").getTime();

const countDownInterval = setInterval(() => {

    const currentTime = new Date().getTime();
    const difference = endDate - currentTime;

    if (difference <= 0) {
        clearInterval(countDownInterval);
        document.getElementById('countdown').innerHTML = 'Eid-ul-Adha 2024 has been celebrated.';
        return;
    }

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('months').innerHTML = months > 0 ? months + ' month' + (months !== 1 ? 's ' : '') : '';
    document.getElementById('days').innerHTML = days > 0 ? days + ' day' + (days !== 1 ? 's ' : '') : '';
    document.getElementById('hours').innerHTML = hours + ' hour' + (hours !== 1 ? 's ' : '');
    document.getElementById('minutes').innerHTML = minutes + ' minute' + (minutes !== 1 ? 's ' : '');
    document.getElementById('seconds').innerHTML = seconds + ' second' + (seconds !== 1 ? 's' : '');

}, 0);