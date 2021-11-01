const totalCost = require('../src/totalCostOfItems')

describe('Total Cost of Items in Basket',  function () {
    it("returns total cost if basket items are found", function () {
     // 1. setup
    const basket = [
        {name: "Banana", price: 0.45, quantity: 1},
        {name: "Apple", price: 0.55, quantity: 1},
]  
    // 2. Execute
    const result = totalCost.totalCostOfItems(basket)
    // 3. Verify
    expect(result).toEqual(1)
    })
    it("returns 0 if basket items are not found", function () {
        // 1. setup
    const basket = []  
    // 2. Execute
    const result = totalCostOfItems(basket)
    // 3. Verify
    expect(result).toEqual(0)
    })
})