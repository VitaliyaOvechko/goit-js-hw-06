function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChange = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const body = document.querySelector('body')

btnChange.addEventListener('click', changeColor);

function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = body.style.backgroundColor;

    // colorName.textContent = getRandomHexColor();
}