const myPrimes = require("../app/getPrimes");

describe("getPrimes", function () {
    it("should return [ 2, 3, 5 ]", function () {
        let primes = myPrimes.getPrimes(5);
        expect(primes).toEqual([2,3,5]);

    });
    it("should return [ 2, 3, 5,7 ]", function () {
        let primes = myPrimes.getPrimes(9);
        expect(primes).toEqual([2,3,5,7]);
    });
    it("should return [ 2, 3, 5,7 ]", function () {
        let primes = myPrimes.getPrimes(9);
        expect(primes).toEqual([2,3,5,7]);
    });
    it("should return [ 2, 3, 5, 7, 11, 13 ] ", function () {
        let primes = myPrimes.getPrimes(16);
        expect(primes).toEqual([ 2, 3, 5, 7, 11, 13 ] );
    });
});

describe("getPrimes", function () {
    it("should return [] if number is 0", function () {
        let primes = myPrimes.getPrimes("string");
        expect(primes).toEqual([]);
    });



});
describe("getPrimes", function () {

    it("should return [] if no prime number is attainable", function () {
        let primes = myPrimes.getPrimes();
        expect(primes).toEqual([]);
    });

});
describe("getPrimes", function () {
    it("should return [] if number is less than 0", function () {
        let primes = myPrimes.getPrimes(-2);
        expect(primes).toEqual([]);
    });

    it("should return [] if number is less than 0", function () {
        let primes = myPrimes.getPrimes(-100);
        expect(primes).toEqual([]);
    });
});

describe("getPrimes", function () {
    it("should return [] if number not an integer", function () {
        let primes = myPrimes.getPrimes("string");
        expect(primes).toEqual([]);
    });
    it("should return [] if number not an integer", function () {
        let primes = myPrimes.getPrimes([]);
        expect(primes).toEqual([]);
    });
});