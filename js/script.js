//Variables 
const sexSwitcher = document.querySelector('.switcher');
//Parametrs inputs
const groupInputs = document.querySelectorAll('input[type="text"]');
//Radio
const radiosGroup = document.querySelectorAll('.radio');
//Buttons
const calculateBtn = document.querySelector('.form__submit-button');
const formResetBtn = document.querySelector('.form__reset-button');


//Functions
const checkAllInputs = (groupInputs) => {
    let paramInputs = 3;
    let filledInputs = 0;
    for(let i = 0; i < groupInputs.length; i++) {
        if(groupInputs[i].value == "" || groupInputs[i] == "0") {
            deactivateBtn()
            console.log(groupInputs[i].value)
        } else {
            filledInputs++
        }
    }
    if(filledInputs === paramInputs) {
        activateBtn();
    } else {
        deactivateBtn();
    }
};


const deactivateBtn = () => {
    calculateBtn.disabled = true;
    formResetBtn.disabled = true;
};

const activateBtn = () => {
   calculateBtn.disabled = false;
   formResetBtn.disabled = false;
};

//Events Listeners
groupInputs.forEach((input) => {
    input.addEventListener('blur', () => {
        checkAllInputs(groupInputs);
    })
})




