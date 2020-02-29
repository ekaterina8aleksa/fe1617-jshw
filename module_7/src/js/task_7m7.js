const fontSizeSlider = document.getElementById('font-size-control');

const slideToChange = () => {
  document
    .getElementById('text')
    .setAttribute('style', `font-size: ${fontSizeSlider.value}px`);
};

fontSizeSlider.addEventListener('input', slideToChange);
