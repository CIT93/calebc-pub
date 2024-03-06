import { renderTbl } from "./render.js";
import {deterHousePts, sizeHousePts} from "./funCF.js";
import { FORM } from "./global.js";
import {saveLS, cfpData} from "./storage.js";

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
const validateField = event => {
  const field = event.target.value
  const fieldId = event.target.id
  const fieldError = document.getElementById(`${fieldId}Error`)
  if (field === '') {
    fieldError.textContent = `${fieldId} is required`
    event.target.classList.add('invalid')
  }
  else {
    fieldError.textContent = ''
    event.target.classList.remove('invalid')
  }
}
document.getElementById('firstName').addEventListener('blur', validateField);
document.getElementById('lastName').addEventListener('blur', validateField);

renderTbl(cfpData)

FORM.addEventListener('submit', function(e) {
  e.preventDefault();
  const firstNameIsValid = document.getElementById('firstName').value !== '';
  const lastNameIsValid = document.getElementById('lastName').value !== '';
  if (firstNameIsValid && lastNameIsValid) {
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const numHouse = parseInt(FORM.numhouse.value);
    const houseSize = FORM.housesize.value;
    start(firstName, lastName, numHouse, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData)
    FORM.reset();
  }
})
//Week 9 Custom Form Validation
//1. Done
//2. Done
//3 and 4: Will watch the video  