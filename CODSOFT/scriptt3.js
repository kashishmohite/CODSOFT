const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');

        if (value === 'C') {
            display.value = '';
        } else if (value === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            if (display.value !== '') {
                display.value = eval(display.value);
            }
        } else {
            display.value += value;
        }
    });
});