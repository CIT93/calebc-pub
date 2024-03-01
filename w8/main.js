import { renderTbl } from "./render.js";
import {deterHousePts, sizeHousePts} from "./funCF.js";
export {FORM};

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const cfpData = [];

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

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const numHouse = parseInt(FORM.numhouse.value);
  const houseSize = FORM.housesize.value;

  start(firstName, lastName, numHouse, houseSize);
  OUTPUT.innerHTML = "";
  renderTbl(cfpData);
  FORM.reset();
})