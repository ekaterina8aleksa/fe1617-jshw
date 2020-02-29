const meter = document.querySelector('#counter');
const counterValue = document.getElementById('value');
const prevBtm = meter.querySelector('button[data-action="decrement"]');
const nextBtn = meter.querySelector('button[data-action="increment"]');
const clearBtn = document.createElement('button');
let clicksNumber = 0;

const increment = () => {
  clicksNumber += 1;
  counterValue.textContent = clicksNumber;
};
const decrement = () => {
  clicksNumber -= 1;
  counterValue.textContent = clicksNumber;
};

clearBtn.textContent = 'Clear';
const clearMeter = () => {
  clicksNumber = 0;
  counterValue.textContent = clicksNumber;
};

clearBtn.addEventListener('click', clearMeter);
prevBtm.addEventListener('click', decrement);
nextBtn.addEventListener('click', increment);

meter.appendChild(clearBtn);
