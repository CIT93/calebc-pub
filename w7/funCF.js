//Code used for the functions in main can leave start function in main

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

  export {deterHousePts, sizeHousePts}