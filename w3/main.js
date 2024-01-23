function deterHousePts(numInHouse) {
    console.log("Inside the function");
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
    console.log(
      `Bases on the number of members in the household of ${numInHouse} the points would be ${carbonPoint}.` );
    
}

let carbonPoint = 0;
//const numInHouse = 6;

//global scope
deterHousePts(3)
deterHousePts(4)