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

//Another functoin for cfObj
// function displayOutObj(obj) {
//   console.log(obj);
//   //updated for objects (below code is for Carbon FootPrint Total)
//   const output = document.getElementById("output");
//   const newP = document.createElement("h1");
//   newP.textContent = `Carbon Footprint total is ${obj.totObj}`;
//   output.appendChild(newP);
//   //done the same with the rest
//   const output2 = document.getElementById("output2");
//   const houseMem = document.createElement("p");
//   const newSize = document.createElement("p");
//   const newOut = document.createElement("p");
//   houseMem.textContent = `# of house members is ${obj.houseMem} and points of household ${obj.householdObj}`;
//   newSize.textContent = `The size of the house is ${obj.sizeObj} and points of house size ${obj.sizeholdObj}`;
//   newOut.textContent = "===================================================";
//   output.appendChild(houseMem);
//   output.appendChild(newSize);
//   output.appendChild(newOut);
// }

function start(householdMembers, sizeHouse) {
  const houseHoldPTS = deterHousePts(householdMembers);
  const sizeHoldPTS = sizeHousePts(sizeHouse);
  const total = houseHoldPTS + sizeHoldPTS;

  cfpData.push({
    houseMem: householdMembers,
    sizeObj: sizeHouse,
    householdObj: houseHoldPTS,
    sizeholdObj: sizeHoldPTS,
    totObj: total,
  });

};

//This is calling array of Object w/ cfpData being array and obj being Object
function displayOutput() {
  for (obj of cfpData){
    console.log(obj)
    const output = document.getElementById("output");
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
    output.appendChild(carTitle);
    output.appendChild(houseMem);
    output.appendChild(newSize);
    output.appendChild(newOut);
  }
}

start(6, "medium");
start(1, "large");
start(7, "small");
start(4,"apartment");
start(2,"small");
start(5, "small");
start(8,"medium");
start(10,"large");

displayOutput();
//console.log(cfpData);

//displayOutput();

//Obj Challenge: refactor the start function to store
//Data in a object instead of an array

//intro to objects
console.log("====")
const myArr = [];
const myObj = {
  cfpTotal: 18,
  houseSize: "small",
  displayOut: function (){
    console.log("This is a method call");
    //Ways to use (this) in the function
    console.log(this)
    console.log(this.cfpTotal);
    console.log(this.houseSize);
  }
};
//Ways to call something in the function
console.log(myObj.cfpTotal);
console.log(myObj["houseSize"]);
//Below code is a method to call a funcion in Object
myObj.displayOut()

//For loop statement

// for (let i = 0; i < 5; i++) {
//   //block scope
//   console.log(i);
// }
// console.log("-------------");
// //Modify code to 1 to 15
// for (let i = 1; i < 16; i++) {
//   console.log(i);
// }
// console.log("-------------");
// //Count backwards?
// for (let i = 15; i > 0; i--) {
//   console.log(i);
// }
/* to fix the code i (initialization) must be greater than 
the condition */
