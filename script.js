function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    let age = {
        years: today.getFullYear() - dob.getFullYear(),
        months: today.getMonth() - dob.getMonth(),
        days: today.getDate() - dob.getDate(),
        hours: today.getHours() - dob.getHours(),
        minutes: today.getMinutes() - dob.getMinutes(),
        seconds: today.getSeconds() - dob.getSeconds()
    };

    if (age.months < 0 || (age.months === 0 && today.getDate() < dob.getDate())) {
        age.years--;
        age.months += 12;
    }

    if (age.days < 0) {
        const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        age.days += prevMonth.getDate();
        age.months--;
    }

    if (age.hours < 0) {
        age.hours += 24;
        age.days--;
    }

    if (age.minutes < 0) {
        age.minutes += 60;
        age.hours--;
    }

    if (age.seconds < 0) {
        age.seconds += 60;
        age.minutes--;
    }

    document.getElementById('result').innerHTML = `
        Age: ${age.years} years, ${age.months} months, ${age.days} days,
        ${age.hours} hours, ${age.minutes} minutes, ${age.seconds} seconds.
    `;
}
