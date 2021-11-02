const createReceipt = require('../src/createReceipt')

describe('Create Receipt', function (){
it("returns true and a string if basket items are found", function () {
       // 1. setup
       const basket = ["name", "price", "quantity"]  
       // 2. Execute
       const result = createReceipt(basket)
       // 3. Verify
       expect(result).toEqual(true)  
})
it("returns false if basket items are not found", function () {
    // 1. setup
const basket = []  
// 2. Execute
const result = createReceipt(basket)
// 3. Verify
expect(result).toEqual(false)
})
})