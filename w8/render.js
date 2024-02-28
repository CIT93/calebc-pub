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

function renderTblBtn(index, data){
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  //Code challenge: Code works but when doing splice it will
  //del all of the data given in the function
  btnDel.addEventListener('click', function(e){
    //This is async code after code runs and pressing del btn
    console.log("hello from inside delete btn");
    console.log(e);
    //added a for loop which worked but forgot the renderTbl(data)
    //just going to stick with the video for now
    data.splice(index, 1);
    renderTbl(data);
  })
  btnEdit.addEventListener('click', function(e){
    
    renderTbl(data)
  })
  return td;
}

function renderTBLBody(data) {
  const tbody = document.createElement("tbody")
  data.forEach(function(obj, index){
    console.log(index)
    const tr = document.createElement("tr")
    for (const [key,value] of Object.entries(obj)) {
      if (key !== "lastN" && key !== "householdObj" && key !== "sizeholdObj"){
        const td = document.createElement("td")
        td.textContent = value;
        tr.appendChild(td)
      }
    }
    const td = renderTblBtn(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  })
  return tbody;
}

function renderTbl(data) {
  const table = renderTblHeading([
    { heading: "Name" },
    { heading: "HouseHold" },
    { heading: "HouseSize" },
    { heading: "CF" },
    { heading: "Action" },
  ]);
  const tbody = renderTBLBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
}
export { renderTbl, renderTblHeading };
