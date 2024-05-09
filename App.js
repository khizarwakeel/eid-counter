
const endDate = new Date("June 17 2024").getTime();

const countdownInterval = setInterval(() => {
    
    const now = new Date().getTime();
    const difference = endDate - now;

    if (difference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'Countdown expired!';
        return;
    }

    let remainingTime = '';
    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const remainingDays = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (months > 0) {
        remainingTime += months + ' month' + (months !== 1 ? 's ' : ' ');
    }
    if (remainingDays > 0) {
        remainingTime += remainingDays + ' day' + (remainingDays !== 1 ? 's ' : ' ');
    }
    remainingTime += remainingHours + ' hour' + (remainingHours !== 1 ? 's ' : ' ');
    remainingTime += remainingMinutes + ' minute' + (remainingMinutes !== 1 ? 's ' : ' ');
    remainingTime += remainingSeconds + ' second' + (remainingSeconds !== 1 ? 's' : '');

    document.getElementById('countdown').innerHTML = remainingTime;
}, 0);