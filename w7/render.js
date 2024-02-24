const TBL = document.getElementById("tab-data");


function renderTblHeading(headTextArr) {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  headTextArr.forEach(function (item) {
  const th = document.createElement("th");
  th.textContent = item.heading;
  tr.appendChild(th);
});
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function renderTbl(data) {
  const table = renderTblHeading([{heading:'Name'},{heading:'HouseHold'}, {heading:'HouseSize'},{heading:'CF'},]);
  const tbody = document.createElement("tbody");
  //const tr = document.createElement("tr");
  data.forEach(function (obj) {
    const tr = document.createElement("tr");
    Object.entries(obj).forEach(function ([key,value]) {
      //const tr = document.createElement("tr");
      /*UPDATE: DONE KEY must refer back to main.js with cfpData.push and put in Obj that is in if statement*/
      if(key !== "lastN" && key !== "householdObj" && key !== "sizeholdObj") {
        //const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
        tbody.appendChild(tr);
      }
    });
    table.appendChild(tbody);
    TBL.appendChild(table);
  });
}
export { renderTbl, renderTblHeading };