const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
let cfpData = [];
console.log("Top of file");

function deterHousePts(numInHouse) {
    console.log("Inside block scope deterHousePts");
  let houseHoldpts = 0;
    if (numInHouse === 1) {
      houseHoldpts = 14;
    } else if (numInHouse === 2) {
      houseHoldpts = 12;
    } else if (numInHouse === 3) {
      houseHoldpts = 10;
    } else if (numInHouse === 4) {
      houseHoldpts = 8;
    } else if (numInHouse === 5) {
      houseHoldpts = 6;
    } else if (numInHouse === 6) {
      houseHoldpts = 4;
    } else if (numInHouse > 6) {
      houseHoldpts = 2;
    }
    return houseHoldpts;
}

function sizeHousePts(size) {
  console.log("Inside block scope sizeHousePts");
  let sizePts = 0;
    if (size === "large") {
      sizePts = 10;
    } else if (size === "medium") {
      sizePts = 7;
    } else if (size === "small") {
      sizePts = 4;
    } else if (size === "apartment") {
      sizePts = 2;
    }
    return sizePts;
}
const element = document.querySelector("h2");
console.log("global scope");

function start(numHouse, houseSize) {
  const houseHoldPTS = deterHousePts(numHouse);
  const sizeHoldPTS = sizeHousePts(houseSize);
  const total = houseHoldPTS + sizeHoldPTS;

  cfpData.push({
    houseMem: numHouse,
    sizeObj: houseSize,
    householdObj: houseHoldPTS,
    sizeholdObj: sizeHoldPTS,
    totObj: total,
  });

};
function displayOutput() {
  for (obj of cfpData) {
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.totObj}`;
    output.appendChild(newH2);
    //the rest of the code
    const output2 = document.getElementById("output2");
    const houseMem = document.createElement("p");
    const newSize = document.createElement("p");
    const newOut = document.createElement("p");
    const carTitle = document.createElement("b");
    carTitle.textContent = "Week 5 - Public Repo in function"
    houseMem.textContent = `# of house members is ${obj.houseMem} and points of household ${obj.householdObj}`;
    newSize.textContent = `The size of the house is ${obj.sizeObj} and points of house size ${obj.sizeholdObj}`;
    newOut.textContent = "===================================================";
    OUTPUT.appendChild(carTitle);
    OUTPUT.appendChild(houseMem);
    OUTPUT.appendChild(newSize);
    OUTPUT.appendChild(newOut);
  }
}

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
  start(numHouse, houseSize);
  OUTPUT.innerHTML = "";
  displayOutput();
  FORM.reset();
})

//The apartment score is correct in my code but the reason it's not working is due to 
//The abbriviation of apt in the code video as it doesn't register it as apartment
//so the value doesn't go through

//to make sure the data given is false/messed up as it will cause errors in multiple places in JS