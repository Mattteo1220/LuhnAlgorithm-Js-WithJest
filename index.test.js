const index = require("./index");


describe("doubleEveryOtherDigitStartingFromMostRightInArray", () =>{

    test("doubleEveryOtherDigitStartingFromMostRightInArray_DigitsWhoseIndexAreDivisibleBy2_Doubled", () => {
        expect.hasAssertions();
        let accountNumber = [2, 6, 1, 6, 3, 9, 2];
        let expectedNumber = [4, 6, 2, 6, 6, 9, 4];

        let actual = index.doubleEveryOtherDigitStartingFromMostRightInArray(accountNumber);

        expect(new Set(actual)).toStrictEqual(new Set(expectedNumber));
    });

    test("doubleEveryOtherDigitStartingFromMostRightInArray_DigitsWhoseDoubledAbove9_ReducedBy9", () => {
        expect.hasAssertions();
        let accountNumber = [7, 6, 1, 6, 9, 9, 2];
        let expectedNumber = [5, 6, 2, 6, 9, 9, 4];

        let actual = index.doubleEveryOtherDigitStartingFromMostRightInArray(accountNumber);

        expect(new Set(actual)).toEqual(new Set(expectedNumber));
    });

    test("doubleEveryOtherDigitStartingFromMostRightInArray_ExtraLongArray_AllNumberIndexesDivisibleBy2AreDoubled", () => {
        const accountNumber = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];
        const expectedNumber =[4, 1, 3, 9, 6, 7, 9, 7, 8, 5, 7, 0, 5, 5, 9, 7];

        let actual = new Set(index.doubleEveryOtherDigitStartingFromMostRightInArray(accountNumber));

        expect(actual).toEqual(new Set(expectedNumber));
    });
});


describe("validateCredTests", () => {
    // All valid credit card numbers
    const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
    const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
    const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
    const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
    const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

    //invalid numbers
    const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
    const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
    const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
    const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
    const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

    test("ValidateCred_ValidNumbers_ReturnsTrue", () => {
        expect(index.validateCred(valid1)).toBeTruthy();
        expect(index.validateCred(valid2)).toBeTruthy();
        expect(index.validateCred(valid3)).toBeTruthy();
        expect(index.validateCred(valid4)).toBeTruthy();
        expect(index.validateCred(valid5)).toBeTruthy();
    });

    test("ValidateCred_InvalidNumbers_ReturnsFalse", () => {
        expect(index.validateCred(invalid1)).toBeFalsy();
        expect(index.validateCred(invalid2)).toBeFalsy();
        expect(index.validateCred(invalid3)).toBeFalsy();
        expect(index.validateCred(invalid4)).toBeFalsy();
        expect(index.validateCred(invalid5)).toBeFalsy();
    });

});


