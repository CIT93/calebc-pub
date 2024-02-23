//This is module for both tbl and PTS
import { renderTbl } from "./render.js";
import {deterHousePts, sizeHousePts} from "./funCF.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

let cfpData = [];
console.log("Top of file");
console.log("global scope");

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
  //Code below is to bring the values from HTML into console.log
  console.log(firstName);
  console.log(lastName);
  console.log("The number of memebers:",numHouse);
  console.log("The size of the house:",houseSize);
  start(firstName, lastName, numHouse, houseSize);
  OUTPUT.innerHTML = "";
  renderTbl(cfpData);
  FORM.reset();
})