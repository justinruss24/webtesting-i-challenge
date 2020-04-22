const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
const item = {
    name: "shield",
    durability: 0,
    enhancement: 0
}

describe("enhancer.js", () => {
    it("should run tests without any errors", () => {
        expect(true).toBe(true);
    });

    describe("repair()", () => {
        it("should take an item and return that item with its durability at 100", () => {
            repair(item);
            expect(item.durability).toBe(100);
        })
    });

    // describe("succeed")
})

