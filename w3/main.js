let carbonPoint = 0;
//const numInHouse = 6;

function deterHousePts(numInHouse) {
    console.log("Inside the function deterHousePts");
    if (numInHouse === 1) {
      carbonPoint = carbonPoint + 14;
    } else if (numInHouse === 2) {
      carbonPoint = carbonPoint + 12;
    } else if (numInHouse === 3) {
      carbonPoint = carbonPoint + 10;
    } else if (numInHouse === 4) {
      carbonPoint = carbonPoint + 8;
    } else if (numInHouse === 5) {
      carbonPoint = carbonPoint + 6;
    } else if (numInHouse === 6) {
      carbonPoint = carbonPoint + 4;
    } else if (numInHouse > 6) {
      carbonPoint = carbonPoint + 2;
    }
    console.log(`Bases on the number of members in the household of ${numInHouse} the points would be ${carbonPoint}.` );
    
}
//global scope
deterHousePts(6);

function sizeHousePts(size) {
    if (size === "large") {
        carbonPoint = carbonPoint + 10;
    } else if (size === "medium") {
        carbonPoint = carbonPoint + 7;
    } else if (size === "small") {
        carbonPoint = carbonPoint + 4;
    } else if (size === "apartment") {
        carbonPoint = carbonPoint + 2;
    }
    console.log(`The House Size is ${size} so the points will be ${carbonPoint}.`);
}
sizeHousePts("medium");
const element = document.querySelector("h2");
element.textContent = carbonPoint;