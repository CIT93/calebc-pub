import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

const renderTblHeading = function() {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headTextArr = ["Name", "HouseHold", "HouseSize", "CF", "Action"];
  headTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

const onUpdate = function(index, data) {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
}

const renderTblBtn = function(index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener("click", function (e) {
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
  btnEdit.addEventListener("click", function (e) {
    console.log("edit the chosen array");
    if (data.length > 1) {
      let editArr = data[index];
      console.log("editArr", editArr);
      FORM.firstname.value = editArr.firstN;
      FORM.lastname.value = editArr.lastN;
      FORM.numhouse.value = editArr.houseMem;
      FORM.housesize.value = editArr.sizeObj;
      onUpdate(index, data);
    } else {
      let editArr = data[index];
      console.log("editArr", editArr);
      FORM.firstname.value = editArr.firstN;
      FORM.lastname.value = editArr.lastN;
      FORM.numhouse.value = editArr.houseMem;
      FORM.housesize.value = editArr.sizeObj;
      onUpdate(index, data);
      renderTblHeading();
    }
  });
  return td;
}

const renderTBLBody = function(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastN" && key !== "householdObj" && key !== "sizeholdObj") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderTblBtn(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

const renderTbl = function(data) {
  const table = renderTblHeading();
  const tbody = renderTBLBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
}
export { renderTbl };
