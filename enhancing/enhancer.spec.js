const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
const item = {
    name: "shield",
    durability: 0,
    enhancement: 0
};
const goodItem = {
    name: "shield",
    durability: 50,
    enhancement: 14
};
const bestItem = {
    name: "shield",
    durability: 100,
    enhancement: 20
};


describe("enhancer.js", () => {
    it("should run tests without any errors", () => {
        expect(true).toBe(true);
    });

    describe("repair()", () => {
        it("should take an item and return that item with its durability at 100", () => {
            repair(item);
            expect(item.durability).toBe(100);
            repair(goodItem);
            expect(goodItem.durability).toBe(100);
        })
    });

    describe("succeed()", () => {
        it("should take an object and return with its enhancement + 1", () => {
            succeed(item);
            expect(item.enhancement).toBe(1);
        });
        it("should not change the enhancement if it is already at 20 or more", () => {
            succeed(bestItem);
            expect(bestItem.enhancement).toBe(20);
        })
    })
})

