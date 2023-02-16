// drop last digit in array

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


module.exports = {
    validateCred,
    doubleEveryOtherDigitStartingFromMostRightInArray
};