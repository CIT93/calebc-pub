class FP {
  constructor(
    first,
    last,
    houseMembers,
    houseSize,
    foodPrint,
    foodSource,
    waterConsume,
    dish_washer,
    housePurchase,
    wastePro,
    glassPts,
    papPts,
    plaPts,
    aluPts,
    stePts,
    fooPts,
    priT,
    pubT,
    flyT,
  ) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodPrint = foodPrint;
    this.foodSource = foodSource;
    this.waterConsumePoints = waterConsume;
    this.dish_washerBoth = dish_washer;
    this.housePurchasePoints = housePurchase;
    this.wasteProPoints = wastePro;
    this.recyGlassPts = glassPts;
    this.recyPapPts = papPts;
    this.recyPlaPts = plaPts;
    this.recyAluPts = aluPts;
    this.recyStePts = stePts;
    this.recyFooPts = fooPts;
    this.priTSco = priT;
    this.pubTSco = pubT;
    this.flyTSco = flyT;

    this.calWaterConsumePoints();
    this.calhouseHoldPoints();
    this.calhouseSizePoints();
    this.calcfFoodPoints();
    this.calFoodSourcePoints();
    this.calRecyclePoints();
    this.caltotal();
  }
  calhouseHoldPoints() {
    if (this.houseMembers === 1) {
      this.houseHoldpts = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldpts = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldpts = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldpts = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldpts = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldpts = 4;
    } else if (this.houseMembers > 6) {
      this.houseHoldpts = 2;
    }
  }
  calhouseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apartment") {
      this.houseSizePoints = 2;
    }
  }
  calcfFoodPoints() {
    if (this.foodPrint === "meatDaily") {
      this.foodPoints = 10;
    } else if (this.foodPrint === "meatWeekly") {
      this.foodPoints = 8;
    } else if (this.foodPrint === "Vegetarian") {
      this.foodPoints = 4;
    } else if (this.foodPrint === "VeganOrWild") {
      this.foodPoints = 2;
    }
  }
  calWaterConsumePoints() {
    if (this.dish_washerBoth === true) {
      this.dish_washerBoth = 2;
    }
  }
  calRecyclePoints() {
    if (this.recyGlassPts === false) {
      this.recyGlassPts = 4;
    } else {
      this.recyGlassPts = 0;
    }
    if (this.recyPapPts === false) {
      this.recyPapPts = 4;
    } else {
      this.recyPapPts = 0;
    }
    if (this.recyPlaPts === false) {
      this.recyPlaPts = 4;
    } else {
      this.recyPlaPts = 0;
    }
    if (this.recyAluPts === false) {
      this.recyAluPts = 4;
    } else {
      this.recyAluPts = 0;
    }
    if (this.recyStePts === false) {
      this.recyStePts = 4;
    } else {
      this.recyStePts = 0;
    }
    if (this.recyFooPts === false) {
      this.recyFooPts = 4;
    } else {
      this.recyFooPts = 0;
    }
  }
  calFoodSourcePoints() {
    if (this.foodSource === "packed") {
      this.foodSourcePoints = 12;
    } else if (this.foodSource === "balance") {
      this.foodSourcePoints = 6;
    } else if (this.foodSource === "local") {
      this.foodSourcePoints = 2;
    }
  }
  caltotal() {
    this.total =
      this.houseHoldpts +
      this.houseSizePoints +
      this.foodPoints +
      this.foodSourcePoints +
      this.waterConsumePoints * this.dish_washerBoth +
      this.housePurchasePoints +
      this.wasteProPoints +
      this.recyGlassPts +
      this.recyPapPts +
      this.recyPlaPts +
      this.recyAluPts +
      this.recyStePts +
      this.recyFooPts +
      this.priTSco +
      this.pubTSco +
      this.flyTSco;
  }
}
export { FP };
