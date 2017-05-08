const myPrimes = require("../app/getPrimes");

describe("getPrimes", function () {
    it("should return [ 2, 3, 5 ]", function () {
        let primes = myPrimes.getPrimes(5);
        expect(primes).toBe([2,3,5]);
    });

});