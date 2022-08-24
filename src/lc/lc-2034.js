class StockPrice {
  constructor() {
    // 当前的时间、价格
    this.lastTimestamp = 0;
    this.lastPrice = 0;
    this.timePriceKV = Object.create(null);
  }
  update(timestamp, price) {
    this.timePriceKV[timestamp] = price;
    // 若当前输入的时间大于等于存的时间
    // 说明是新的时间，而不是纠错的时间
    if (this.lastTimestamp <= timestamp) {
      this.lastTimestamp = timestamp;
      this.lastPrice = price;
    }
  }
  current() {
    return this.lastPrice;
  }
  maximum() {
    let max = -1;
    const prices = Object.values(this.timePriceKV);
    for (let i = 0; i < prices.length; i++) {
      max = Math.max(max, prices[i]);
    }
    return max;
  }
  minimum() {
    let min = Infinity;
    const prices = Object.values(this.timePriceKV);
    for (let i = 0; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
    }
    return min;
  }
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */

var obj = new StockPrice();
obj.update(38, 2308);
obj.update(47, 7876);
obj.update(58, 1866);
obj.update(43, 121);
obj.update(40, 5339);
obj.update(32, 5339);
obj.update(43, 6414);
obj.minimum(43, 6414);
