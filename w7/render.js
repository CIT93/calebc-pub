const TBL = document.getElementById("tab-data");
const table = renderTblHeading([
{heading:'Name'},
{heading:'HouseHold'}, 
{heading:'HouseSize'},
{heading:'CF'},
{heading:'Action'}
]);


function renderTblHeading(headTextArr) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  //Item refers back to the array of obj that being 
  //The heading in the renderTblHeading
  //item.heading calls those arr given
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
  const tbody = document.createElement("tbody");
  //const tr = document.createElement("tr");
  data.forEach(function (item) {
    const tr = document.createElement("tr");
    Object.entries(item).forEach(function ([key,value]) {
      //If statement is suppose to NOT include lastName, houseHoldPTS, and sizeHoldPTS
      /*I know that it works because it going into both block scopes in both function
      What I need to do next is to take out all three things listed above
      UPDATE: DONE KEY must refer back to main.js with cfpData.push and put in Obj that is in if statement*/
      if(key !== "lastN" && key !== "householdObj" && key !== "sizeholdObj") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    });
    //NOTE: data.push? can maybe work but still keeps arr
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
  
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    tr.appendChild(td);
    tbody.appendChild(tr);

  });
  table.appendChild(tbody);
  TBL.appendChild(table);
}
export { renderTbl, renderTblHeading };

//Challenge 1 : Done (I think putting functions in funCF)
//Those being deterhousePTS and sizeHousePTS

//Challenge 2 : Done (Fixed up heading only appearing one)
//Pulled const table out of renderTbl and put const table into
//global scope

//Challenge 3 : Finish reference, finished looping object that doesn't include
//last name, house member points, and house size points.

//Unfinised work: don't know how to get a new input array and update the <tr> (row)