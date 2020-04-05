class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.timerId = selector;
        this.finalDate = targetDate;

        this.creatingFaceClock();
        this.timerStart();
    }

    getDataForTimer() {
        //const currentDate = Date.now();
        const time = this.finalDate - Date.now();
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }

    creatingFaceClock() {
        const clockFace = document.getElementById('timer-1');
        const daySpan = document.querySelector('[data-value="days"]');
        const hourSpan = document.querySelector('[data-value="hours"]');
        const minuteSpan = document.querySelector('[data-value="mins"]');
        const secondSpan = document.querySelector('[data-value="secs"]');

        daySpan.textContent = String(this.getDataForTimer().days).padStart(
            2,
            '0',
        );
        hourSpan.textContent = String(this.getDataForTimer().hours).padStart(
            2,
            '0',
        );
        minuteSpan.textContent = String(
            this.getDataForTimer().minutes,
        ).padStart(2, '0');
        secondSpan.textContent = String(
            this.getDataForTimer().seconds,
        ).padStart(2, '0');
    }

    timerStart() {
        setInterval(() => {
            this.creatingFaceClock();
        }, 1000);
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Sep 1, 2020'),
});

// timer.creatingFaceClock();
