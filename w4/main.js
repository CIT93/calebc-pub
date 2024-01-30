const cfpData = [];
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

function start(householdMembers, sizeHouse) {
  const houseHoldPTS = deterHousePts(householdMembers);
  const sizeHoldPTS = sizeHousePts(sizeHouse);
  const total = houseHoldPTS + sizeHoldPTS;
  cfpData.push([householdMembers, sizeHouse, houseHoldPTS, sizeHoldPTS, total]);
  //cfpData.push(arr[0],          arr[1],    arr[2],       arr[3],      arr[4])
  //the gap is to line up with the variable given
}

function displayOutput() {
  for (arr of cfpData){
    console.log(arr);
    //First 3 and so is to create a elementId which would be the first part
    //of the output (parentNode, asked chatGPT what is appendChild)
    const output = document.getElementById("output");
    const output2 = document.getElementById("output2");
    //The next 3 and so const are the element or what letter format the
    //output would be the last part of output
    const houseMem = document.createElement("p");
    const newP = document.createElement("h1");
    const newSize = document.createElement("p");
    const newOut = document.createElement("p");
    //The next 3 and so is to follow up the previous code and display what the output would be in the 
    //element (childNode)
    houseMem.textContent = `# of house members is ${arr[0]} and points of household ${arr[2]}`;
    newP.textContent = `Carbon Footprint total is ${arr[4]}`;
    newSize.textContent = `The size of the house is ${arr[1]} and points of house size ${arr[3]}`;
    newOut.textContent = "===================================================";
    //output is parentNode & (parA) (newP) is childNode. 
    output.appendChild(newP);
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