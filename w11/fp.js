class FP {
  constructor(first, last, houseMembers, houseSize, foodPrint) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodPrint = foodPrint;

    this.houseHoldPoints();
    this.houseSizePoints();
    this.cfFoodPoints();
    this.total();
  }
  houseHoldPoints() {
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
  houseSizePoints() {
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
  cfFoodPoints() {
    if (this.foodPrint === "Domestic meat on a daily basis") {
      this.foodPoints = 10;
    } else if (this.foodPrint === "Domestic meat a few time a week") {
      this.foodPoints = 7;
    } else if (this.foodPrint === "Vegetarian") {
      this.foodPoints = 4;
    } else if (this.foodPrint === "Vegan") {
      this.foodPoints = 2;
    }
  }
  total() {
    this.total = this.houseHoldpts + this.houseSizePoints + this.foodPoints;
  }
}
export { FP };
