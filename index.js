let textPw = document.querySelector("#pwText");
let pwLength = document.querySelector(".displayPwLength span");
let generateBtn = document.querySelector(".generate");
let copyBtn = document.querySelector("#copyBtn");
let msg = document.querySelector("#message");
let strengthPw = document.querySelector("#passwordStrength");

let upper = document.querySelector("#upperCase");
let lower = document.querySelector("#lowerCase");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbol");
let password = '';

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

addEventListener();

function addEventListener() {
    generateBtn.addEventListener("click", generatePw);
    copyBtn.addEventListener('click', copyPw);
}

function copyPw(e){
    e.preventDefault();
    const pwd = textPw.textContent;
    if (password) {
        const textArea = document.createElement('textarea');
        textArea.value = pwd;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
    }
}

function generatePw(e){
    password = '';
    if (upper.checked) {
        //Si esta chequeado, le concatena la letra mayuscula random obtenida en la funcion getUpperCase a la password.
        password += getUpperCase();
    }

    if (lower.checked) {
        password += getLowerCase();
    }

    if (number.checked) {
        password += getNumberCase();
    }

    if (symbol.checked) {
        password += getSymbolCase();
    }

    if (upper.checked || lower.checked || number.checked || symbol.checked) {
        completePw();
    }

    strength();
}

function completePw(){
    while (password.length < parseInt(pwLength.textContent)) {
        const numberRandom = getRandom();
        if (upper.checked && numberRandom === 0) {
            password += getUpperCase();
        }
        
        if (lower.checked && numberRandom === 1) {
            password += getLowerCase();
        }
        
        if (number.checked && numberRandom === 2) {
            password += getNumberCase();
        }
        
        if (symbol.checked && numberRandom === 3) {
            password += getSymbolCase();
        }
    }

    textPw.innerHTML = password;
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
}

function getRandom() {
    return Math.floor(Math.random() * 4);
}

function getUpperCase(){
    return upperLetters[getRandomNumber(upperLetters.length)];
}

function getLowerCase(){
    return lowerLetters[getRandomNumber(lowerLetters.length)];
}

function getNumberCase(){
    return numbers[getRandomNumber(numbers.length)];
}

function getSymbolCase(){
    return symbols[getRandomNumber(symbols.length)];
}

function showVal(value) {
    pwLength.textContent = value; 
}

function strength() {
    if(password.length > 0) {
        msg.style.display = "block"
    } else {
        msg.style.display = "none"
    }

    if(password.length < 10) {
        strengthPw.innerHTML = "weak";
        pwText.style.color = "#FF5925"
        msg.style.color = "#FF5925"
    } 
    else if(password.length >= 10 && password.length < 15) {
        strengthPw.innerHTML = "medium";
        pwText.style.color = "#F1C40F"
        msg.style.color = "#F1C40F"
    }
    else if(password.length >= 15) {
        strengthPw.innerHTML = "strong";
        pwText.style.color = "#52BE80"
        msg.style.color = "#52BE80"
    }
}





