const inputForm = document.getElementById('validation-input');
const validationLimit = Number(inputForm.getAttribute('data-length'));
//console.log(validationLimit);

/*const validationCheckup = () => {
  inputForm.value.length !== validationLimit
    ? inputForm.classList.toggle('invalid')
    : inputForm.classList.toggle('valid');

    console.log(inputForm.value.length);
};*/

const validationCheckup = () => {
  if (inputForm.value.length !== validationLimit) {
    inputForm.classList.add('invalid');
    inputForm.classList.remove('valid');
    console.log('invalid');
  } else {
    inputForm.classList.add('valid');
    inputForm.classList.remove('invalid');
    console.log('valid');
  }

  console.log(inputForm.value.length);
  console.log(typeof validationLimit);
  console.log(typeof inputForm.value.length);
};

inputForm.addEventListener('blur', validationCheckup);
