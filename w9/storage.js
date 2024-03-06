
const cfpData = getLS();

function saveLS(cfpData) {
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
}

function getLS(){
    const retrievedArr = localStorage.getItem("cfp")
    //NULL is when something is 0 or empty below the if statement is saying IF
    //retrievedArr DOES NOT equal to NULL then continue statement
    if (retrievedArr !== null) {
       // let parData = JSON.parse(retrievedArr)
        // const outputDiv = document.getElementById('output')
        // outputDiv.innerHTML = parData
        // return parData
        return JSON.parse(retrievedArr);
    }
    else {
        return [];
    }
}
function removeLS(cfpData) {
    localStorage.removeItem('cfp');
  }
export {cfpData, saveLS, getLS}