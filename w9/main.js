import { renderTbl } from "./render.js";
import {deterHousePts, sizeHousePts} from "./funCF.js";
import { FORM, userF, userL, errorElement } from "./global.js";
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


FORM.addEventListener('submit', (e) => {
  let messages = []
  if(userF.value === '' || userF.value === null) {
    messages.push('First Name is required')
  }
  if(userL.value === '' || userL.value === null) {
    messages.push('Last Name is required')
  }


  if(messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ')
  }
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const numHouse = parseInt(FORM.numhouse.value);
  const houseSize = FORM.housesize.value;
  start(firstName, lastName, numHouse, houseSize);
  saveLS(cfpData);
  renderTbl(cfpData)
  FORM.reset();
})
//Week 9 Custom Form Validation
//1. Done
//2. Done
//3 and 4: Will watch the video  