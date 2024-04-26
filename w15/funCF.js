//Code used for the functions in main can leave start function in main

const deterHousePts = (numInHouse = 1) => {
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


const sizeHousePts = (size = "apartment") => {
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

    const foodPrint = (food = "Domestic meat on a daily basis") => {
      console.log("Inside block scope foodPrint");
       let foodPts = 0;
        if (food === "Domestic meat on a daily basis") {
          foodPts = 10;
        } else if (food === "Domestic meat a few time a week") {
          foodPts = 7;
        } else if (food === "Vegetarian") {
          foodPrintPts = 4;
        } else if (food === "Vegan") {
          foodPts = 2;
        }
        return foodPts;
    }
  export {deterHousePts, sizeHousePts, foodPrint}
//Only gotten this far something went wrong with my code and won't stay
//up to date with code that is being put in for some reason