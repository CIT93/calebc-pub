import { FP, tot } from "./fp";
//Notes: Had idea for creating module and referencing the this.total
//but have problems with getting the total and putting it into my table.

//const calcAvg = FP.reduce((sum, len) => sum/len, total)

const TOT = FP.total()

console.log(TOT);

const addRow = (tableID) => {
    const tableR = document.getElementById(tableID);
    const newR = tableR.insertRow(-1);
    const newCell = newR.insertCell(0);
    const newText = document.createTextNode(`Average CF: ${calcAvg}`)
    return newCell.appendChild(newText);
}

export { addRow }