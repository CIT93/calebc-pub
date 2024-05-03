class FP {
  constructor(first, last, houseMembers, houseSize, foodPrint, foodSource, waterConsume, dish_washer, housePurchase) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodPrint = foodPrint;
    this.foodSource = foodSource;
    this.waterConsumePoints = waterConsume;
    this.dish_washerBoth = dish_washer;
    this.housePurchasePoints = housePurchase

    this.calWaterConsumePoints();
    this.calhouseHoldPoints();
    this.calhouseSizePoints();
    this.calcfFoodPoints();
    this.calFoodSourcePoints();
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
      this.dish_washerBoth = 2 
    } 
  }
  calFoodSourcePoints() {
    if(this.foodSource === "packed") {
      this.foodSourcePoints = 12;
    } else if (this.foodSource === "balance"){
      this.foodSourcePoints = 6;
    } else if (this.foodSource === "local"){
      this.foodSourcePoints = 2;
    }
  }
  caltotal() {
    this.total = this.houseHoldpts + this.houseSizePoints + this.foodPoints + this.foodSourcePoints + (this.waterConsumePoints * this.dish_washerBoth) + this.housePurchasePoints;
  }
}
export { FP };
