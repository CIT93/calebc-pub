import { renderTbl } from "./render.js";
import {deterHousePts, sizeHousePts} from "./funCF.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import {saveLS, cfpData} from "./storage.js";
import { FP } from "./fp.js";

const start = (first, last, houseHoldMembers, houseSize) => {
  const houseHoldPTS = deterHousePts(houseHoldMembers)
  const sizeHoldPTS = sizeHousePts(houseSize);
  const total = houseHoldPTS + sizeHoldPTS;

  cfpData.push({
    firstN: first,
    lastN: last,
    houseMem: houseHoldMembers,
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
    //start(FNAME.value, LNAME.value, parseInt(FORM.numhouse.value), FORM.housesize.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.numhouse.value), FORM.housesize.value, FORM.foodCF.value);
    cfpData.push(fpObj)
    saveLS(cfpData);
    renderTbl(cfpData)
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first and last name";
  }
})

/*Got code to work need to figure out why it duplicate another table in the renderTbl() 
EDIT: it was because I left start() in the FORM.addEventListener */