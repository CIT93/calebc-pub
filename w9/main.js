import { renderTbl } from "./render.js";
import {deterHousePts, sizeHousePts} from "./funCF.js";
import { FORM } from "./global.js";
import {saveLS, cfpData} from "./storage.js";

const firstNameEl = document.getElementById('firstname');
const lastNameEl = document.getElementById('lastname');
const submitEl = document.getElementById("SubmitError");

function start(firstName, lastName, numHouse, houseSize) {
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

function validateField(event) {
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
document.getElementById('firstname').addEventListener('blur', validateField);
document.getElementById('lastname').addEventListener('blur', validateField);

FORM.addEventListener('submit', function(e) {
  e.preventDefault();
  const firstNameIsValid = document.getElementById('firstname').value !== '';
  const lastNameIsValid = document.getElementById('lastname').value !== '';
  if (firstNameIsValid && lastNameIsValid) {
    submitEl.textContent = '';
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const numHouse = parseInt(FORM.numhouse.value);
    const houseSize = FORM.housesize.value;
    start(firstName, lastName, numHouse, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData)
    FORM.reset();
  }
  else{
    submitEl.textContent = "Form requires first and last name";
  }
})