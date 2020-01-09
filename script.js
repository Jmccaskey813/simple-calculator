const calculator = document.querySelector('.grid');
const keys = document.querySelector('.keys');
const display = document.querySelector('.display');

keys.addEventListener('click', e=>{
    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        var displayedNum = display.textContent 
        if (action === 'decimal') display.textContent = displayedNum + '.';
        if (!action ) {
            (displayedNum === '0')? display.textContent = keyContent 
                                : display.textContent = displayedNum + keyContent;
            console.log(displayedNum) 
        }
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' ){
            calculator.dataset.previousKeyType = 'operator'
            console.log(calculator.dataset.previousKeyType);
        }
    }
    
    
}, false);
