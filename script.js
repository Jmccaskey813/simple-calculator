const calculator = document.querySelector('.grid');
const keys = document.querySelector('.keys');
const display = document.querySelector('.display');

//create object for numbers
let a;
let aValue= false;
let b;
let bValue= false;
let numA;
let numB;
let final;




keys.addEventListener('click', e=>{
    
    let calculateNums = ()=>{
        
        if (aValue === true && bValue === false){
            b = displayedNum;
            bValue= true;
            numA= parseFloat(a);
            numB= parseFloat(b);
            let equation = a + operator + b;
            let result = equation
            .split('')    
            .forEach(i => {
                if (i === '*') final = numA * numB;
                 if (i === '/') final = numA / numB;
                 if (i === '+') final = numA + numB;
                 if (i === '-') final = numA - numB; 
                 return final;
             });
            
            displayedNum = final;
            display.textContent = final;
            
        }
       };
       

    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        var displayedNum = display.textContent 
        if (action === 'clear'){
            display.textContent= '0';
            displayedNum  = '0';
            aValue = false;
            bValue = false;
        }
        if (action === 'decimal') display.textContent = displayedNum + '.';
        if (!action ) {
            (displayedNum === '0' || displayedNum === '')? display.textContent = keyContent 
                                : display.textContent = displayedNum + keyContent;
            // console.log(displayedNum) 
        }
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' ){
            operator = key.value;
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

