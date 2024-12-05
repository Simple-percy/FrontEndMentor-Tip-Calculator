const billInput = document.querySelector('#bill');
const people = document.querySelector('#people');
const tipButton = document.querySelectorAll('.percent');
const form = document.querySelector('form')
const customTip = document.querySelector('#custom')
const resetBtn  = document.querySelector('.reset')
const body = document.querySelector('body')
const tipAmount = document.querySelector('.final-tip')
const total = document.querySelector('.final-total')
let elements = ['bill', 'people', 'custom']; 
let tip;
let authTest;
let tipTest =  false
let customTest;
    

tipButton.forEach(button => {
    button.addEventListener('click', tipClick)
})



elements.forEach(element => {
    const inputs = document.querySelector(`#${element}`)
    const listners = ['click', 'keyup', 'keydown'];
    listners.forEach(evt => {
        inputs.addEventListener(evt, listen)
    })
})

function tipClick (e) {
    formValidation()
    tip = e.target.textContent
    tip = tip.slice(0, -1)
    tip = tip / 100
    customTip.style.border = 'none'
    customTip.value = ''
    if (e.target.classList.contains('clicked')) {
        tipButton.forEach(button => {
            button.className = 'percent'
     })
         e.target.classList.remove('percent')
         e.target.classList.add = 'clicked'
       
    } else {
        tipButton.forEach(button => {
            button.className = 'percent'
        
     })
       
    } 
    
    e.target.className = 'clicked'
    calculation ()
}

function customPercent () {
   calculation ()
}

function formValidation () {
    const fields = ['bill']; //add field after this
    const errors = []
    fields.forEach (field => {
        const value = document.querySelector(`#${field}`).value;
        if (value === '' || value === ' ' || value === NaN || value === null) {
            const errorMessage = 'Please fill in the field';
            errors.push(`${errorMessage}` + ` ${field}`)
        }
        if (errors.length === 0) {
            authTest = true
        }

    })
}

function checkUI() {
    if (authTest = true) {
        calculation ()
    }
}

function tipSelect () {
   tipButton.forEach (button => {
    if (button.className === 'clicked') {
        button.classList.remove('clicked')
        button.classList.add = 'percent'
        tipTest = false
    } 
   })
}

function listen (e) {
        calculation ()
    
    if (e.target.value === ' '|| e.target.value === '' ) {
       e.target.style.border = 'solid 2px rgb(189, 7, 7)';
    } else {
        e.target.style.border = 'solid 2px hsl(172, 67%, 45%)'
    } 
}

function calculation () {
    formValidation()
    checkTipBtn ()
    let customT = customTip.value / 100

    if (people.value > 0 ) {

    if (authTest === true && customTip.value === '') {

            let billTotal = document.getElementById('bill').value;  
            let finalTip = '$' + ((billTotal * tip) / people.value).toFixed(2);
            tipAmount.textContent = finalTip;
            let finalTotal = '$' + ((billTotal * tip) / people.value + (billTotal / people.value)).toFixed(2);
            total.textContent = finalTotal
            console.log(billTotal)

    } else if (authTest === true && customTip.value > 0 ) {
            let billTotal = document.getElementById('bill').value;  
            let finalTip = '$' + ((billTotal * customT) / people.value).toFixed(2);
            tipAmount.textContent = finalTip;
            let finalTotal = '$' + ((billTotal * customT) / people.value + (billTotal / people.value)).toFixed(2);
            total.textContent = finalTotal
            console.log(customT)
        }
    }
}

function checkTipBtn () {
    tipButton.forEach(button => {
        if (button.classList.contains('clicked')) {
            tipTest = true
        } 
    })
}

function resetAll () {
total.textContent = '$0.00'
tipAmount.textContent = '$0.00'

elements.forEach(element => {
    const inputs = document.querySelector (`#${element}`)
    inputs.value = ''
    inputs.style.border = 'none'
})


}


customTip.addEventListener('keyup', customPercent)
//resetBtn.addEventListener('click', checkUI)
customTip.addEventListener('click', tipSelect)
resetBtn.addEventListener('click', resetAll)
formValidation ()
