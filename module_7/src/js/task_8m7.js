const boxesDiv = document.getElementById('boxes');
const clearBtn = document.querySelector('button[data-action="destroy"]');
const createBtn = document.querySelector('button[data-action="render"]');
const input = document.querySelector('div > input');

const createBoxes = amount => {
  const setRGB = () => {
    //const randomColor = Math.round(Math.random(0, 1) * 255);

    const red = Math.round(Math.random(0, 1) * 255);
    const green = Math.round(Math.random(0, 1) * 255);
    const blue = Math.round(Math.random(0, 1) * 255);

    return `rgb(${red},${green},${blue})`;
  };
  amount = input.value;

  const boxesArr = []; //пустой массив для div
  //push шаблонной строки div со всеми параметрами и увеличением на каждой итерации цикла
  for (let i = 0; i < amount; i += 1) {
    const divSize = 30;
    let growingSize = divSize + i * 10;
    const boxItem = `<div style="width:${growingSize}px;
    height:${growingSize}px;
    background-color:${setRGB()}" ></div>`;
    boxesArr.push(boxItem);
  }
  //return boxesArr;
  //boxesDiv.append(...boxesArr);

  /*const boxArr = boxesArr.reduce((acc, boxItem) => {
      acc += `${boxItem}`;
    return acc;
}, '');
  boxesDiv.insertAdjacentHTML('afterbegin', boxArr);*/
  boxesDiv.insertAdjacentHTML('afterbegin', boxesArr.join(''));
  //boxesDiv.append(boxesArr.join(''));
};

const destroyBoxes = () => {
  boxesDiv.innerHTML = '';
  input.value = '';
};

clearBtn.addEventListener('click', destroyBoxes);
createBtn.addEventListener('click', createBoxes);
