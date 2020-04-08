class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.timerId = selector;
        this.finalDate = targetDate;
        this.creatingFaceClock();
        this.createTitelDate();
        this.timerStart();
    }

    getDataForTimer() {
        const time = this.finalDate - Date.now();
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        return {
            time,
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

        clockFace.firstElementChild.setAttribute('style', 'background-color: rgb(255, 102, 102);');
        clockFace.firstElementChild.nextElementSibling.setAttribute('style', 'background-color: rgb(255, 255, 102) ;');
        clockFace.lastElementChild.previousElementSibling.previousElementSibling.setAttribute(
            'style',
            'background-color: rgb(0, 255, 0);',
        );
        clockFace.lastElementChild.previousElementSibling.setAttribute(
            'style',
            'background-color: rgb(102, 102, 255);',
        );

        daySpan.textContent = String(this.getDataForTimer().days).padStart(2, '0');
        hourSpan.textContent = String(this.getDataForTimer().hours).padStart(2, '0');
        minuteSpan.textContent = String(this.getDataForTimer().minutes).padStart(2, '0');
        secondSpan.textContent = String(this.getDataForTimer().seconds).padStart(2, '0');
    }

    createTitelDate() {
        const titleTargetDate = document.querySelector('.title');
        if (this.finalDate <= new Date()) {
            titleTargetDate.textContent = 'Ooops, this is the endddd';
        } else {
            titleTargetDate.textContent = `We are waiting for ${this.finalDate.toDateString()}`;
        }
    }

    timerStart() {
        const deadLine = Date.parse(this.finalDate) <= Date.parse(new Date());

        this.startForTimer = setInterval(() => {
            if (deadLine) {
                clearInterval(this.startForTimer);
                return;
            }
            this.creatingFaceClock();
        }, 1000);
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('1 Sep 2020'),
});
