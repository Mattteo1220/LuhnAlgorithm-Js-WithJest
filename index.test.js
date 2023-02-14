const index = require("./index");

const validTestZero = [4,5,3,9,6,8,9,8,8,7,7,0,5,7,9,8];
const validTestOne = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];

describe("IsDivisibleBy2Tests", () => {

    test("IsDivisibleBy2_NumDivisibleBy2_ReturnsTrue", () => {
        expect(index.isDivisibleBy2(2)).toBeTruthy();
    }); 

    test("IsDivisibleBy2_NumNotDisibleBy2_ReturnsFalse", () => {
        expect(index.isDivisibleBy2(13)).toBeFalsy();
    });

});


// describe("validateCredTests", () => {

//     test("function that validates account numbers and returns if they are valid.", () => {
//         expect(index.validateCred(validTestZero)).tobeTruthy();
//     });

// });


