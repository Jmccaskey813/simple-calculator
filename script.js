const calculator = document.querySelector('.grid');
const keys = document.querySelector('.keys');
const display = document.querySelector('.display');
let a;
let aValue= false;
let b;
let bValue= false;
let operator;

keys.addEventListener('click', e=>{
    let calculateNums = ()=>{
        if (aValue === true && bValue === false){
            b = displayedNum;
            bValue= true;
            let result = Math.floor(parseInt(a) + operator + parseInt(b))
            displayedNum = result;
            console.log(result);
        }
       }
       

    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        var displayedNum = display.textContent 
        if (action === 'decimal') display.textContent = displayedNum + '.';
        if (!action ) {
            (displayedNum === '0' || displayedNum === '')? display.textContent = keyContent 
                                : display.textContent = displayedNum + keyContent;
            // console.log(displayedNum) 
        }
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' ){
            operator = keyContent;
             if (aValue === false){
                 a= displayedNum;
                 aValue= true;
                displayedNum === '0';
                display.textContent= '';
             };
        }
        if (action === 'calculate'){calculateNums()};
    }
    
    
}, false);

