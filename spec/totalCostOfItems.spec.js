const totalCostOfItems = require('../src/totalCostOfItems')

describe('Total Cost of Items in Basket',  function () {
    it("returns true if basket items are found", function () {
     // 1. setup
    const basket = ["name", "price", "quantity"]  
    // 2. Execute
    const result = totalCostOfItems.totalCost(basket)
    // 3. Verify
    expect(result).toEqual(true)
    })
    it("returns false if basket items are not found", function () {
        // 1. setup
    const basket = [null]  
    // 2. Execute
    const result = totalCostOfItems(basket)
    // 3. Verify
    expect(result).toEqual(false)
    })
})