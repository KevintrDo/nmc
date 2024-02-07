const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const additionButton = document.querySelector('#addButton');
const subtractButton = document.querySelector('#subtractButton');
const multiplyButton = document.querySelector('#multiplyButton');
const divideButton = document.querySelector('#divideButton');
const outputField = document.querySelector('#output');


additionButton.addEventListener('click', () =>{
    addition1 = Number(input1.value);
    addition2 = Number(input2.value);
    sum = addition1 + addition2;
    outputField.value = "$" + sum;
});

subtractButton.addEventListener('click', () => {
    subtraction1 = Number(input1.value);
    subtraction2 = Number(input2.value);
    sum = subtraction1 - subtraction2;
    outputField.value = "$" + sum;
});

multiplyButton.addEventListener('click', () => {
    multiply1 = Number(input1.value);
    multiply2 = Number(input2.value);
    sum = multiply1 * multiply2;
    outputField.value = "$" + sum;
});

divideButton.addEventListener('click', () => {
    divide1 = Number(input1.value);
    divide2 = Number(input2.value);
    sum = divide1 / divide2;
    outputField.value = "$" + sum;
});

