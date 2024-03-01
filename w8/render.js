import { FORM } from "./main.js";

const TBL = document.getElementById("tab-data");

function renderTblHeading() {
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
//Coding Challenge: take away heading if one array
//and add edit to the code, where it returns the
//array of obj and able to edit it
function renderTblBtn(index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener("click", function (e) {
    //In this if else statement: if will grab the data.length if there is more than 1 array of obj
    //which ever the user wanted to del the code will del the array
    //In the else: if the length is = to 1 or just 1 array in the obj it will del the heading as well
    if (data.length > 1) {
      console.log("del the chosen array");
      console.log(e);
      data.splice(index, 1);
      renderTbl(data);
    } else {
      console.log("del the chosen array as well as the heading");
      data.splice(index, 1);
      renderTbl(data);
      renderTblHeading();
    }
  });
  btnEdit.addEventListener("click", function (e) {
    console.log("edit the chosen array");
    //need to somehow repeat the FORM.addeventListener
    //repopoulate the boxes with the data given in the array

    //splice(index: is the position of the array (set at 0), howmany: the number of items wanting to remove)
    //item1....: is the new elements wanting to be added
    if (data.length > 1) {
      let editArr = data[index];
      console.log("editArr", editArr);
      FORM.firstname.value = editArr.firstN;
      FORM.lastname.value = editArr.lastN;
      FORM.numhouse.value = editArr.houseMem;
      FORM.housesize.value = editArr.sizeObj;
      data.splice(index, 1);

      renderTbl(data);
    } else {
      let editArr = data[index];
      console.log("editArr", editArr);
      FORM.firstname.value = editArr.firstN;
      FORM.lastname.value = editArr.lastN;
      FORM.numhouse.value = editArr.houseMem;
      FORM.housesize.value = editArr.sizeObj;
      data.splice(index, 1);

      renderTbl(data);
      renderTblHeading();
    }
  });
  return td;
}

function renderTBLBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index);
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

function renderTbl(data) {
  const table = renderTblHeading();
  const tbody = renderTBLBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
  // const tbody = renderTBLBody(data);
  // table.appendChild(tbody);
  // TBL.appendChild(table);
}
export { renderTbl };

/*Notes: ATTEMPT 1 del: For del, I can make the renderTblHeading become an if statement and it will only appear if there is an arr of obj 
that the user submitted. Update: Can't put it in the renderTblHead as the length of the obj don't exist yet might have to be in btnDel 
Update: Finished with del heading for more notes look at renderTblBtn Function
ATTEMP 1 edit: I can maybe splice the function and add the FORM[index] to edit the CF. The problem comes with how I would attempt to add
the FORM into render.js . UPDATE: I exported the FORM into render.js and now need to find how to bring it into edit
would assume need to bring the addEventListener into the function but there might be another way... */
