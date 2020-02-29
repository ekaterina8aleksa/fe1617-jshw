const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');
//const outputName = document.querySelector('h1 > span');
outputName.hidden = true;
const checkUp = () => {
  let userInfo = inputName.value.trim();
  outputName.hidden = false;
  inputName.value.length === 0
    ? outputName.textContent = 'незнакомец'
    : (outputName.textContent = userInfo);
};
inputName.addEventListener('input', checkUp);
inputName.addEventListener('blur', checkUp);
