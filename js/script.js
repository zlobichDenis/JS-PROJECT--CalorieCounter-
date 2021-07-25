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
            deactivateCalculateBtn();
            console.log(groupInputs[i].value)
        } else {
            activateResetBtn();
            filledInputs++
        }
    }
    if(filledInputs === paramInputs) {
        activateCalculateBtn();
    } else if(filledInputs === 0) {
        deactivateResetBtn();
    }
    else {
        deactivateCalculateBtn();
    }
};

const deactivateResetBtn = () => {
    formResetBtn.disabled = true;
};

const activateResetBtn = () => {
    formResetBtn.disabled = false;
};

const deactivateCalculateBtn = () => {
    calculateBtn.disabled = true;
};

const activateCalculateBtn = () => {
   calculateBtn.disabled = false;
};

//Events Listeners
groupInputs.forEach((input) => {
    input.addEventListener('blur', () => {
        checkAllInputs(groupInputs);
    })
})




