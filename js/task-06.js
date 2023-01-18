const input = document.querySelector('#validation-input');
const inputLength = Number(input.dataset.length);

const inputChange = input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === inputLength) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
    else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    };
}
