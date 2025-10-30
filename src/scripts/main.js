'use strict';

const collectionInputs = document.querySelectorAll('input');
const inputs = Array.from(collectionInputs);
const collectionDivField = document.querySelectorAll('.field');

collectionDivField.forEach((fied, ind) => {
  const labelEl = document.createElement('label');
  const idInput = inputs[ind].getAttribute('id');
  const nameImput = inputs[ind].getAttribute('name');

  inputs[ind].setAttribute('placeholder', `${nameImput.toUpperCase()}`);

  labelEl.setAttribute('for', idInput);
  labelEl.classList.add('field-label');
  labelEl.textContent = nameImput;

  fied.insertAdjacentElement('beforeend', labelEl);
});
