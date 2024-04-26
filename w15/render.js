import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

const renderTblHeading = () => {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  table.setAttribute("id","tab-HOF")
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headTextArr = ["Name", "HouseHold", "HouseSize","FoodChoice", "CF", "Action"];
  headTextArr.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

const onUpdate = (index, data) => {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
}

const renderTblBtn = (index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener("click", e => {
    if (data.length > 1) {
      console.log("del the chosen array");
      console.log(e);
      onUpdate(index, data);
    } else {
      console.log("del the chosen array as well as the heading");
      onUpdate(index, data)
      renderTblHeading();
    }
  });
  btnEdit.addEventListener("click", e => {
    console.log("edit the chosen array");
    if (data.length > 1) {
      let editArr = data[index];
      console.log("editArr", editArr);
      FORM.firstname.value = editArr.first;
      FORM.lastname.value = editArr.last;
      FORM.numhouse.value = editArr.houseMembers;
      FORM.housesize.value = editArr.houseSize;
      FORM.foodCF.value = editArr.foodPrint
      onUpdate(index, data);
    } else {
      let editArr = data[index];
      console.log("editArr", editArr);
      FORM.firstname.value = editArr.first;
      FORM.lastname.value = editArr.last;
      FORM.numhouse.value = editArr.houseMembers;
      FORM.housesize.value = editArr.houseSize;
      FORM.foodCF.value = editArr.foodPrint
      onUpdate(index, data);
      renderTblHeading();
    }
  });
  return td;
}

const renderTBLBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach( (obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["first", "houseMembers", "houseSize", "foodPrint", "total"]
    keys.forEach(key => {
      const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
    })
    const td = renderTblBtn(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

const calAvg = (data) => {
  const rTot = data.reduce((sum, ea) => sum + ea.total, 0);
  const tabR = document.getElementById("tab-HOF");
  let newRow = tabR.insertRow(-1);
  let newCell = newRow.insertCell(0);
  let newLab = document.createTextNode(`Average FP: ${Math.floor(rTot/data.length)}`)
  newCell.appendChild(newLab)
}

const renderTbl = data => {
  if (data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTBLBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
    calAvg(data)
  }
}
export { renderTbl};
