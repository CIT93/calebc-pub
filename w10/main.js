import { renderTbl } from "./render.js";
import {deterHousePts, sizeHousePts} from "./funCF.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import {saveLS, cfpData} from "./storage.js";

const start = function (firstName, lastName, numHouse, houseSize) {
  const fName = firstName;
  const lName = lastName;
  const houseHoldPTS = deterHousePts(numHouse);
  const sizeHoldPTS = sizeHousePts(houseSize);
  const total = houseHoldPTS + sizeHoldPTS;

  cfpData.push({
    firstN: fName,
    lastN: lName,
    houseMem: numHouse,
    sizeObj: houseSize,
    householdObj: houseHoldPTS,
    sizeholdObj: sizeHoldPTS,
    totObj: total,
  });

};

//THIS IF STATEMENT IS TO HELP OUT WITH renderTBL() from appearing
//EVEN WITH NO ARRAY GIVEN
if (cfpData.length > 0){
  renderTbl(cfpData)
}

 const validateField = function (event) {
  const field = event.target.value
  const fieldId = event.target.id
  const fieldError = document.getElementById(`${fieldId}Error`)
  if (field === '') {
    fieldError.textContent = `${fieldId} is required`
    event.target.classList.add('invalid')
  }
  else {
    fieldError.textContent = '';
    event.target.classList.remove('invalid');
  }
}
//attach blur eventlisteners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

FORM.addEventListener('submit', function(e) {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    start(FNAME.value, LNAME.value, parseInt(FORM.numhouse.value), FORM.housesize.value);
    saveLS(cfpData);
    renderTbl(cfpData)
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first and last name";
  }
})

const add2 = function(...a){
  return 2+a[3];
}
//Code comment below is considered default value (a=10)
//-----------------------------------
// const add2 = function(a=10){
//   return 2+a;
// }
//-----------------------------------
//add2(3);
const result = add2(1,2,3,4);

//spread argrument, set the (..a) into an array from my understanding
// const add2 = function(...a){
//   return 2+a;
// }

//IIFE
const a = 3;
(function(){
  console.log('inside IIFE')
  console.log(a)
})(a);