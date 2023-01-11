
// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const nadaLink = (event) => {
    event.preventDefault();
}
HREF_LINK.addEventListener('click', nadaLink);

const nadaCheckbox = (event) => {
    event.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', nadaCheckbox);


INPUT_TEXT.addEventListener('keypress', (event) => {
    const letra = event.key;
    if (letra !== 'a') {
        event.preventDefault();
    }
});
