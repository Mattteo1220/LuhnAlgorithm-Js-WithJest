// drop last digit in array

const constants = require("./constants");

const doubleEveryOtherDigitStartingFromMostRightInArray = (accountNumber) => {
    console.log(accountNumber);
    let newAccountNumber = new Array();
    let index = accountNumber.length - 1;
    for(let i = index; i >= 0; i--){
        let num = accountNumber[i];
        if(i != index){
            newAccountNumber.unshift(num);
            continue;
        }
        num *= 2;
        if(num > 9){
            num -= 9;
        }
        index -= 2;
        newAccountNumber.unshift(num);
    }
    return newAccountNumber;
}

const validateCred = (accountNumber) => {
    var lastDigit = accountNumber.pop();

    let newAccountNumber = doubleEveryOtherDigitStartingFromMostRightInArray(accountNumber)
    console.debug(newAccountNumber);

    let sum = 0;
    for(let number of newAccountNumber){
        sum += number;
    }
    sum += lastDigit;

    return (sum % 10 === 0 ? true : false);
}

const idInvalidCardCompanies = (accountNumbersArray) => {
    let companiesWithBadCardNumbers = new Array();

    for(let badNumberArray of accountNumbersArray){
        switch(badNumberArray[0]){
            case 3:
                companiesWithBadCardNumbers.push(constants.AmericanExpress);
                break;
            case 4:
                companiesWithBadCardNumbers.push(constants.Visa);
                break;
            case 5:
                companiesWithBadCardNumbers.push(constants.MasterCard);
                break;
            case 6:
                companiesWithBadCardNumbers.push(constants.Discover);
                break;
            default:
                throw "Invalid Vendor Id";
        }
    }
    return companiesWithBadCardNumbers;

}


module.exports = {
    validateCred,
    doubleEveryOtherDigitStartingFromMostRightInArray,
    idInvalidCardCompanies
};