const meter = document.querySelector('#counter');

let clicksNumber = 0;
const prevBtm = meter.querySelector('button[data-action="decrement"]');
const nextBtn = meter.querySelector('button[data-action="increment"]');
const increment = () => {
  clicksNumber += 1;
  document.getElementById('value').textContent = clicksNumber;
};
const decrement = () => {
  clicksNumber -= 1;
  document.getElementById('value').textContent = clicksNumber;
};

prevBtm.addEventListener('click', decrement);

nextBtn.addEventListener('click', increment);

const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear';
const clearMeter = () => {
  clicksNumber = 0;
  document.getElementById('value').textContent = clicksNumber;
};
clearBtn.addEventListener('click', clearMeter);
meter.appendChild(clearBtn);
