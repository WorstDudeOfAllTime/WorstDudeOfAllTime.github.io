const zero = document.querySelector('.zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const decimal = document.querySelector('#decimal');
const clear = document.querySelector('#clear');
const negative = document.querySelector('#pos-neg');
const percent = document.querySelector('#percent');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const divide = document.querySelector('#divide');
const displayNums = document.querySelector('#display-numbers');
const flip = document.querySelector('#middle-school');
const calcBody = document.querySelector('#calc-body');
const equal = document.querySelector('#equal');
const achievements = document.querySelector('#achievements');
let flipped = false;
let stored = false;
let storedNum = 0;
let symbol = '';
let nummy = '0'
let numOne = 0;
let numTwo = 0;
let LOL = false;
let pi = false;
window.onload = setInterval(achievementCheck,300);
//Functions
function add(numOne = 0, numTwo = 0){
    return numOne + numTwo;
};
function subtract(numOne = 0, numTwo = 0){
    return numOne - numTwo;
};
function multiply(numOne = 0, numTwo = 0){
    return numOne * numTwo;
};
function division(numOne = 0, numTwo = 0){
    return numOne / numTwo;
};
function equals(){
    if(symbol === ''){   
        next;
    }else if(symbol === '+'){
        nummy = add(storedNum, parseInt(nummy));
        displayNums.textContent = nummy;
    }else if(symbol === '-'){
        nummy = subtract(storedNum, parseInt(nummy));
        displayNums.textContent = nummy;
    }else if(symbol === '*'){
        nummy = multiply(storedNum, parseInt(nummy));
        displayNums.textContent = nummy;
    }else if(symbol === '/'){
        nummy = division(storedNum, parseInt(nummy));
        displayNums.textContent = nummy;
    }
};
function middleSchool(){
    if(flipped === true && nummy === '5318008' && LOL === false || flipped === true && nummy === '7734' && LOL === false){
        const lolKid = document.createElement('img');
        lolKid.src="lolkid.jpg";
        lolKid.classList.add('lolkid');
        lolKid.style.height = "75px";
        lolKid.style.width = "75px";
        lolKid.style.borderRadius = '5px';
        lolKid.style.boxShadow = '0px 0px 5px black';
        lolKid.style.margin = '0px 1px';
        achievements.appendChild(lolKid);
        LOL = true;
    }
};
function pieCheck(){
    if(nummy === '3.14' && pi === false){
        const pie = document.createElement('img');
        pie.src="pie.jpg";
        pie.classList.add('lolkid');
        pie.style.height = "75px";
        pie.style.width = "75px";
        pie.style.borderRadius = '5px';
        pie.style.boxShadow = '0px 0px 5px black';
        pie.style.margin = '0px 4px';
        achievements.appendChild(pie);
        pi = true;
    }
}
function achievementCheck(){
    pieCheck();
    middleSchool();
};
//end Function declarations
displayNums.textContent = nummy;

//number keys
zero.addEventListener('click', ()=>{
    if(nummy > 0){
        nummy = nummy + '0';
        displayNums.textContent = nummy;
    }else{
        nummy = '0';
        displayNums.textContent = nummy;
    }
});
one.addEventListener('click', ()=>{
    if(nummy === '0' || stored === true){
        nummy = '1';
        displayNums.textContent = nummy;
        stored = false;
    }else{
        nummy = nummy + '1' ;
        displayNums.textContent = nummy;
    }
});
two.addEventListener('click', ()=>{
    if(nummy === '0' || stored === true){
        nummy = '2';
        displayNums.textContent = nummy;
        stored = false;
    }else{
        nummy = nummy + '2' ;
        displayNums.textContent = nummy;
    }
});
three.addEventListener('click', ()=>{
    if(nummy === '0' || stored === true){
        nummy = '3';
        displayNums.textContent = nummy;
        stored = false;
    }else{
        nummy = nummy + '3' ;
        displayNums.textContent = nummy;
    }
});
four.addEventListener('click', ()=>{
    if(nummy === '0'|| stored === true){
        nummy = '4';
        displayNums.textContent = nummy;
        stored = false;
    }else{
        nummy = nummy + '4' ;
        displayNums.textContent = nummy;
    }
});
five.addEventListener('click', ()=>{
    if(nummy === '0'|| stored === true){
        nummy = '5';
        displayNums.textContent = nummy;
        stored = false;
    }else{
        nummy = nummy + '5' ;
        displayNums.textContent = nummy;
    }
});
six.addEventListener('click', ()=>{
    if(nummy === '0'|| stored === true){
        nummy = '6';
        displayNums.textContent = nummy;
        stored = false;
    }else{
        nummy = nummy + '6' ;
        displayNums.textContent = nummy;
    }
});
seven.addEventListener('click', ()=>{
    if(nummy === '0'|| stored === true){
        nummy = '7';
        displayNums.textContent = nummy;
        stored = false;
    }else{
        nummy = nummy + '7' ;
        displayNums.textContent = nummy;
    }
});
eight.addEventListener('click', ()=>{
    if(nummy === '0'|| stored === true){
        nummy = '8';
        displayNums.textContent = nummy;
        stored = false;
    }else{
        nummy = nummy + '8' ;
        displayNums.textContent = nummy;
    }
});
nine.addEventListener('click', ()=>{
    if(nummy === '0' || stored === true){
        nummy = '9';
        displayNums.textContent = nummy;
        stored = false;
    }else{
        nummy = nummy + '9' ;
        displayNums.textContent = nummy;
    }
});
//END NUMBER KEYS

//FUNCTIONAL KEYS
clear.addEventListener('click', ()=>{
    nummy = '0';
    displayNums.textContent = nummy;
    stored = false;
    storedNum = 0;
    symbol = '';
});

plus.addEventListener('click', ()=>{
    if(symbol !== ''){
        equals();
    }
    stored = true;
    storedNum =  parseFloat(nummy);
    symbol = '+'
    console.log(storedNum);
    console.log(nummy);
});
minus.addEventListener('click', ()=>{
    if(symbol !== ''){
        equals();
    }
    stored = true;
    storedNum = parseFloat(nummy);
    symbol = '-'
});
times.addEventListener('click', ()=>{
    if(symbol !== ''){
        equals();
    }
    stored = true;
    storedNum = parseFloat(nummy);
    symbol = '*'
});
divide.addEventListener('click', ()=>{
    if(symbol !== ''){
        equals();
    }
    stored = true;
    storedNum = parseFloat(nummy);
    symbol = '/'
});
equal.addEventListener('click', ()=>{
    equals();
    symbol = "";
});
decimal.addEventListener('click', ()=>{
    nummy = nummy + '.';
    displayNums.textContent = nummy;
});
//END FUNCTIONAL KEYS
flip.addEventListener('click', ()=>{
    if(flipped === false){
        calcBody.style.transform = 'rotate(180deg)';
        flipped = true;
    }else if(flipped === true){
        calcBody.style.transform = 'rotate(0deg)';
        flipped = false;
    }
});